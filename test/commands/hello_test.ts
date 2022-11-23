import { assertEquals } from "asserts";
import HELLO_COMMAND from "@/commands/hello.ts";
import { InteractionResponseTypes } from "https://deno.land/x/discordeno@13.0.0/mod.ts";

Deno.test("hello command", async (t) => {
  await t.step("says hello to an user", async () => {
    assertEquals(await HELLO_COMMAND.handler({ userId: BigInt(1) }), {
      type: InteractionResponseTypes.ChannelMessageWithSource,
      data: { content: `Hello, <@1>!` },
    });
  });

  await t.step("fails if user doesn't exist", async () => {
    assertEquals(await HELLO_COMMAND.handler({ userId: undefined }), {
      type: InteractionResponseTypes.ChannelMessageWithSource,
      data: { content: "User doesn't exist!" },
    });
  });
});
