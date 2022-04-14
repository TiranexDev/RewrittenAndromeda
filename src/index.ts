// Импортируем необходимые модули
import {
  data as ClusterData,
  Client as ClusterClient,
} from "discord-hybrid-sharding";
import { Client, Collection } from "discord.js";
// Импортируем конфиг
import config from "./config";
// Импортируем эвент хандлер
import runEventHandler from "./handlers/eventHandler";

// Инитилизируем клиента

const client = new Client({
  intents: ["GUILD_MEMBERS", "GUILD_BANS", "GUILDS", "GUILD_PRESENCES"], // 32767 = Все интенты
  shards: ClusterData.SHARD_LIST,
  shardCount: ClusterData.TOTAL_SHARDS,
});

client.cluster = new ClusterClient(client);
client.commands = new Collection();
client.events = new Collection();

// Запускаем эвент хандлер
runEventHandler(client);
// Запускаем бота
client.login(config.token);

process.on("SIGINT", () => {
  client.destroy(); // Если нода выключается то выключаем бота, рекомендую не убирать эту строку
});