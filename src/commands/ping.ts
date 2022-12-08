import { ApplicationCommandTypes, InteractionResponseTypes } from "discord";
import { buildCommand } from "@/commands.ts";

const PING_COMMAND = buildCommand({
  name: "ping",
  description: "Pings you back!",
  type: ApplicationCommandTypes.ChatInput,
  handler: () => {
    return {
      type: InteractionResponseTypes.ChannelMessageWithSource,
      data: { content: "Pong!" },
    };
  },
});

export default PING_COMMAND;
