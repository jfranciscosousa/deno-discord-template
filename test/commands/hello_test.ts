import { assertEquals } from "asserts";
import HELLO_COMMAND from "@/commands/hello.ts";
import { InteractionResponseTypes } from "https://deno.land/x/discordeno@13.0.0/mod.ts";

Deno.test("hello command", async (t) => {
  await t.step("says hello to an user", async () => {
    const response = await HELLO_COMMAND.handler({ userId: BigInt(1) });

    assertEquals(response, {
      type: InteractionResponseTypes.ChannelMessageWithSource,
      data: { content: `Hello, <@1>!` },
    });
  });

  await t.step("fails if user doesn't exist", async () => {
    const response = await HELLO_COMMAND.handler({ userId: undefined });

    assertEquals(response, {
      type: InteractionResponseTypes.ChannelMessageWithSource,
      data: { content: "User doesn't exist!" },
    });
  });
});
