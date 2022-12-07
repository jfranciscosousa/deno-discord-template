import { assertEquals } from "asserts";
import { InteractionResponseTypes } from "discord";
import PING_COMMAND from "@/commands/ping.ts";

Deno.test("ping command", async (t) => {
  await t.step("pongs back", async () => {
    const response = await PING_COMMAND.handler(undefined);

    assertEquals(response, {
      type: InteractionResponseTypes.ChannelMessageWithSource,
      data: { content: `Pong!` },
    });
  });
});
