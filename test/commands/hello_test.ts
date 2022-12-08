import { assertEquals } from "asserts";
import HELLO_COMMAND from "@/commands/hello.ts";
import { InteractionResponseTypes } from "https://deno.land/x/discordeno@13.0.0/mod.ts";

Deno.test("hello command", async (t) => {
  await t.step("says hello to an user", async () => {
    const response = await HELLO_COMMAND.handler({ userId: "1" });

    assertEquals(response, {
      type: InteractionResponseTypes.ChannelMessageWithSource,
      data: { content: `Hello, <@1>!` },
    });
  });
});
