import { ApplicationCommandTypes, InteractionResponseTypes } from "discord";
import { Command } from "@/commands/utils.ts";

const PING_COMMAND: Command = {
  name: "ping",
  description: "Pings you back!",
  type: ApplicationCommandTypes.ChatInput,
  handler: () => {
    return {
      type: InteractionResponseTypes.ChannelMessageWithSource,
      data: { content: "Pong!" },
    };
  },
};

export default PING_COMMAND;
