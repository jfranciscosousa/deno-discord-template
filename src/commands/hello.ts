import {
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
  Interaction,
  InteractionResponseTypes,
} from "discord";
import { z } from "zod";
import { buildCommand, getOptionValue } from "@/commands/utils.ts";

const HELLO_COMMAND = buildCommand({
  name: "hello",
  description: "Says hello to any user!",
  options: [
    {
      name: "user",
      description: "The user",
      type: ApplicationCommandOptionTypes.User,
      required: true,
    },
  ],
  type: ApplicationCommandTypes.ChatInput,
  buildArguments: (interaction: Interaction) => {
    const schema = z.object({ userId: z.string() });

    return schema.parse({
      userId: getOptionValue<string>(interaction, "user"),
    });
  },
  handler: ({ userId }) => {
    return {
      type: InteractionResponseTypes.ChannelMessageWithSource,
      data: { content: `Hello, <@${userId}>!` },
    };
  },
});

export default HELLO_COMMAND;
