import {
  ApplicationCommandTypes,
  Interaction,
  InteractionResponse,
} from "discord";
import PING_COMMAND from "@/commands/ping.ts";

export const COMMANDS = {
  [PING_COMMAND.name]: PING_COMMAND,
};

export interface Command {
  name: string;
  description: string;
  type: ApplicationCommandTypes;
  handler: (
    interaction: Interaction
  ) => Promise<InteractionResponse> | InteractionResponse;
}
