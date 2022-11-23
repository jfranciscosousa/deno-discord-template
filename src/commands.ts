import PING_COMMAND from "@/commands/ping.ts";
import HELLO_COMMAND from "@/commands/hello.ts";
import { Command } from "@/commands/utils.ts";

// deno-lint-ignore no-explicit-any
export const COMMANDS: Record<string, Command<any>> = {
  [PING_COMMAND.name]: PING_COMMAND,
  [HELLO_COMMAND.name]: HELLO_COMMAND,
};
