import {
  ApplicationCommandTypes,
  Interaction,
  InteractionResponseTypes,
} from "discord";
import { Command } from "@/commands/mod.ts";

const PING_COMMAND: Command = {
  name: "ping",
  description: "Pings you back!",
  type: ApplicationCommandTypes.ChatInput,
  handler: (_interaction: Interaction) => {
    return {
      type: InteractionResponseTypes.ChannelMessageWithSource,
      data: { content: "Pong!" },
    };
  },
};

export default PING_COMMAND;
