import { json, serve, validateRequest } from "sift";
import { camelize } from "https://deno.land/x/camelize@2.0.0/mod.ts";
import { Interaction, verifySignature } from "discord";
import config from "@/config.ts";
import { COMMANDS } from "@/commands/mod.ts";

// For all requests to "/" endpoint, we want to invoke home() handler.
serve({
  "/": home,
});

// The main logic of the Discord Slash Command is defined in this function.
async function home(request: Request) {
  // validateRequest() ensures that a request is of POST method and
  // has the following headers.
  const { error } = await validateRequest(request, {
    POST: {
      headers: ["X-Signature-Ed25519", "X-Signature-Timestamp"],
    },
  });
  if (error) {
    return json({ error: error.message }, { status: error.status });
  }

  const signature = request.headers.get("X-Signature-Ed25519")!;
  const timestamp = request.headers.get("X-Signature-Timestamp")!;
  // verifySignature() verifies if the request is coming from Discord.
  // When the request's signature is not valid, we return a 401 and this is
  // important as Discord sends invalid requests to test our verification.
  const { isValid, body } = verifySignature({
    signature,
    timestamp,
    body: await request.text(),
    publicKey: config.DISCORD_PUBLIC_KEY,
  });

  if (!isValid) {
    return json(
      { error: "Invalid request" },
      {
        status: 401,
      }
    );
  }

  const interaction = camelize<Interaction>(JSON.parse(body)) as Interaction;

  const commandName = interaction.data?.name;

  if (!commandName) {
    console.log("Unknown command!");
    return json({ error: "bad request" }, { status: 400 });
  }

  const command = COMMANDS[commandName];

  if (!command) {
    console.error("Unknown command!");
    return json({ error: "bad request" }, { status: 400 });
  }

  return json(await command.handler(interaction));
}
