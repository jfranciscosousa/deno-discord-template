import {
  ApplicationCommandTypes,
  CreateApplicationCommand,
  Interaction,
  InteractionResponse,
} from "discord";
import PING_COMMAND from "@/commands/ping.ts";
import HELLO_COMMAND from "@/commands/hello.ts";

export const COMMANDS = {
  [PING_COMMAND.name]: PING_COMMAND,
  [HELLO_COMMAND.name]: HELLO_COMMAND,
};

export interface Command extends CreateApplicationCommand {
  name: string;
  description: string;
  type: ApplicationCommandTypes;
  handler: (
    interaction: Interaction
  ) => Promise<InteractionResponse> | InteractionResponse;
}
