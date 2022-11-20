import { getApplicationCommands, upsertApplicationCommands } from "discord";
import bot from "@/bot.ts";
import { COMMANDS } from "@/commands/mod.ts";

const existingCommands = (await getApplicationCommands(bot)).array();

const commandsWithId = Object.values(COMMANDS).map((command) => {
  const existingCommandId = existingCommands.find(
    (c) => c.name === command.name
  )?.id;

  if (!existingCommandId) return command;

  return { ...command, id: existingCommandId };
});

bot.activeGuildIds.forEach(
  async (guildId) => await upsertApplicationCommands(bot, commandsWithId, guildId)
);

console.log(`New commands: ${commandsWithId.length - existingCommands.length}`);
console.log(`Updated commands: ${existingCommands.length}`);

Deno.exit();
