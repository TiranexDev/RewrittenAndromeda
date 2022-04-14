// Импортиуем дискорд штучки
import { Client } from "discord.js";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
// Импортируем конфиг
import config from "../config";

// Создём рест клиент
const rest = new REST({ version: "10" }).setToken(config.token);

// Экспортируем хандлер для отправки команд
export default (client: Client, cmds: any) => {
  client.guilds.cache.forEach((g) => {
    ThisSync(client, g, cmds);
  });
};

// Экспортируем функцию ThisSync для отправки команд
export let ThisSync = (client: Client, g: any, cmds: any) => {
  return rest // Отправляем команды
    .put(Routes.applicationGuildCommands(client.user!.id, g.id), {
      body: cmds, // Тут должен быть массив с командами
    })
    .catch((err) => {
      if (err.message == "Missing Access") return; // Зачем тут эта строка? Если владелец сервера выключил право на использование команд, то бот выдаст ошибку Missing Access. А тут уже не бот виноват или его владелец
      console.log(err);
    });
};
