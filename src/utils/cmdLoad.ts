// Импортируем необходимые Библиотеки
import { Client } from "discord.js";
import fs from "fs";
import path from "path";

// Экспортируем функцию
export default async (client: Client) => {
  let cmds: any = []; // Создаем пустой массив команд

  await fs
    .readdirSync(path.resolve(__dirname, "../commands")) // Читаем директорию команд
    .forEach(async (file: any) => { // Проходимся по всем файлам
      const { command } = await import(
        path.resolve(__dirname, "../commands/" + file) // Импортируем файл P.S. Не убирайте квадратные скобки
      );

      client.commands.set(command.name, command); // Устанавливаем команду в коллекцию команд

      cmds.push({
        name: command.name,
        description: command.description || "Нету",
        options: command.options ? command.options : [],
      }); // В массив команд добавляем команду
    });

  return cmds; // Возвращаем массив команд
};
