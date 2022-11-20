import { configSync as loadEnv } from "dotenv";

const { DISCORD_APPLICATION_ID, DISCORD_PUBLIC_KEY, DISCORD_BOT_TOKEN } =
  // On Deno Deploy we don't have access to some file utilities, in that case we load from `Deno.env`
  typeof Deno.readFileSync !== "undefined" ? loadEnv() : Deno.env.toObject();

const config = {
  DISCORD_APPLICATION_ID: BigInt(DISCORD_APPLICATION_ID),
  DISCORD_PUBLIC_KEY,
  DISCORD_BOT_TOKEN,
};

export default config;
