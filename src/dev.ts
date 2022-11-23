import { sendInteractionResponse, startBot } from "discord";
import bot from "@/bot.ts";
import config from "@/config.ts";
import { COMMANDS } from "@/commands.ts";

await startBot(bot);
console.log(
  `https://discord.com/api/oauth2/authorize?client_id=${config.DISCORD_APPLICATION_ID}&scope=bot%20applications.commands`
);

bot.events.interactionCreate = async (_bot, interaction) => {
  const commandName = interaction.data?.name;

  console.log(`DEBUG: Incoming command: ${commandName}`);

  if (!commandName) {
    console.log("Unknown command!");
    return;
  }

  const command = COMMANDS[commandName];

  if (!command) {
    console.error("Unknown command!");
    return;
  }

  const response = await command.handler(
    command.buildArguments ? command.buildArguments(interaction) : undefined
  );

  await sendInteractionResponse(
    bot,
    interaction.id,
    interaction.token,
    response
  );
};
