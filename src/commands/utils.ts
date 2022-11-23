import {
  ApplicationCommandTypes,
  CreateApplicationCommand,
  Interaction,
  InteractionResponse,
} from "discord";

export interface Command<T = undefined> extends CreateApplicationCommand {
  // The name of the command
  name: string;
  // The description of the command
  description: string;
  // The application command type of this command
  type: ApplicationCommandTypes;
  // The argument builder. This parses the interaction to provide the
  // params to `handler`
  buildArguments?: (interaction: Interaction) => T;
  // The logic of the command
  handler: (
    interaction: T
  ) => Promise<InteractionResponse> | InteractionResponse;
}

export function getOptionValue<T>(
  interaction: Interaction,
  optionName: string
) {
  return interaction.data?.options?.find((option) => option.name === optionName)
    ?.value as T;
}
