import { upsertApplicationCommands } from "discord";
import bot from "@/bot.ts";
import { COMMAND } from "@/commands/ping.ts";

await upsertApplicationCommands(bot, [COMMAND]);
