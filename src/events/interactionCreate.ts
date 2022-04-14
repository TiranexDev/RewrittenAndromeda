// Импортируем типизацию
import { Client, MessageEmbed } from "discord.js";
import { Event } from "../typings";
// Функции
import aembed from "../utils/embedBuilder";
import handleerror from "../utils/handleError";
import { parseRus } from "../utils/translate";

export let event: Event = {
  name: "interactionCreate",
  run: async (client: Client, interaction: any) => {
    let command: any = await client.commands.get(interaction.commandName);

    if (command.disabled)
      return interaction.reply({
        embeds: [
          aembed(
            "ошибка",
            "Данная комманда была выключена разработчиком.",
            "RED"
          ),
        ],
        ephemeral: true,
      });

    command.run(interaction, client, {
      embed: MessageEmbed, // Чтобы не импортировать MessageEmbed просто пишем: f.embed
      aembed: aembed, // Фунцкия чтобы не создавать каждый раз новый эмбед
      colors: { // Цвета...
        default: "BLUE", // Обычный: Синий
        error: "RED", // Ошибочный: Красный
      },
      handleerror: handleerror, // Функция для обработки ошибок
      parseRus: parseRus // Функция для перевода текста на русский
    });
  },
};
