import {
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
  Interaction,
  InteractionResponseTypes,
} from "discord";
import { Command, getOptionValue } from "@/commands/mod.ts";

const HELLO_COMMAND: Command = {
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
  handler: (interaction: Interaction) => {
    const userId = getOptionValue<bigint>(interaction, "user");

    if (!userId) {
      return {
        type: InteractionResponseTypes.ChannelMessageWithSource,
        data: { content: `User doesn't exist!` },
      };
    }

    return {
      type: InteractionResponseTypes.ChannelMessageWithSource,
      data: { content: `Hello, <@${userId}>!` },
    };
  },
};

export default HELLO_COMMAND;
