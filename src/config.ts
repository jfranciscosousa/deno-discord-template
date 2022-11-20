import { config as loadEnv } from "dotenv";

const { DISCORD_APPLICATION_ID, DISCORD_PUBLIC_KEY, DISCORD_BOT_TOKEN } =
  loadEnv();

const config = {
  DISCORD_APPLICATION_ID: BigInt(DISCORD_APPLICATION_ID),
  DISCORD_PUBLIC_KEY,
  DISCORD_BOT_TOKEN,
};

export default config;
