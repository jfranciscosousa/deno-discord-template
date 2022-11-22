import { config as dotenv } from "dotenv";

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

const config = {
  DISCORD_APPLICATION_ID: BigInt(DISCORD_APPLICATION_ID),
  DISCORD_PUBLIC_KEY,
  DISCORD_BOT_TOKEN,
};

export default config;
