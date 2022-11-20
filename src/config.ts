import { configSync as loadEnv } from "dotenv";

const { DISCORD_APPLICATION_ID, DISCORD_PUBLIC_KEY, DISCORD_BOT_TOKEN } =
  typeof Deno.readFileSync !== "undefined" ? loadEnv() : Deno.env.toObject();

const config = {
  DISCORD_APPLICATION_ID: BigInt(DISCORD_APPLICATION_ID),
  DISCORD_PUBLIC_KEY,
  DISCORD_BOT_TOKEN,
};

export default config;
