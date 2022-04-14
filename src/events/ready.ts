import { Client } from "discord.js";
import { Event } from "../typings";
import r from "../handlers/commandHandler";
import getcmds from "../utils/cmdLoad";

export let event: Event = {
  name: "ready",
  run: async (client: Client) => {
    let cmds = await getcmds(client);
    setTimeout(() => r(client, cmds), 200);
  },
};
