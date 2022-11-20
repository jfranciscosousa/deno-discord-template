import {
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
  Interaction,
  InteractionResponseTypes,
} from "discord";
import { Command } from "@/commands/mod.ts";

const HELLO_COMMAND: Command = {
  name: "hello",
  description: "Says hello to the person you want!",
  options: [
    {
      name: "person",
      description: "The person",
      type: ApplicationCommandOptionTypes.User,
      required: true,
    },
  ],
  type: ApplicationCommandTypes.ChatInput,
  handler: (interaction: Interaction) => {
    const name = interaction.data?.options?.find(
      (option) => option.name === "person"
    )?.value;

    return {
      type: InteractionResponseTypes.ChannelMessageWithSource,
      data: { content: `Hello, ${name}!` },
    };
  },
};

export default HELLO_COMMAND;
