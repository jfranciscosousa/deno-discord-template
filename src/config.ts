import { config as dotenv } from "dotenv";
import { z } from "zod";

function loadEnv() {
  // Deno.readFileSync doesn't exist on serverless contexts
  if (typeof Deno.readFileSync === "undefined") return Deno.env.toObject();

  const localDotenvConfig = dotenv();

  // Only use dotenv if a DEVELOPMENT flag exists
  if (localDotenvConfig.DEVELOPMENT === "true") return localDotenvConfig;

  return Deno.env.toObject();
}

const { DISCORD_APPLICATION_ID, DISCORD_PUBLIC_KEY, DISCORD_BOT_TOKEN } =
  loadEnv();

const configSchema = z.object({
  DISCORD_APPLICATION_ID: z.bigint(),
  DISCORD_PUBLIC_KEY: z.string(),
  DISCORD_BOT_TOKEN: z.string(),
});

const parsedConfig = configSchema.safeParse({
  DISCORD_APPLICATION_ID: BigInt(DISCORD_APPLICATION_ID),
  DISCORD_PUBLIC_KEY,
  DISCORD_BOT_TOKEN,
});

if (!parsedConfig.success) {
  console.error("\x1b[31m%s\x1b[0m", "Environment variables error, please review them!")
  console.error("\x1b[31m%s\x1b[0m", parsedConfig.error)
  Deno.exit(-1);
}

const config = parsedConfig.success ? parsedConfig.data : undefined;

export default config;
