// Импортируем загрузку команд
import { ThisSync } from "../handlers/commandHandler";
import loadCommands from "../utils/cmdLoad";
// Импортируем клиента
import { Client, Guild } from "discord.js";
// Импортируем типизацию
import { Event } from "../typings/";
// Экспортируем эвент
export let event: Event = {
  name: "guildCreate",
  run: async (client: Client, guild: Guild) => {
    // Получаем команду с помощью loadCommands который мы импортировали, важно! использовать await
    let cmds = await loadCommands(client);
    ThisSync(client, guild, cmds);
  },
};
