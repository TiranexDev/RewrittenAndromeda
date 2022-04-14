// Импортируем типизацию
import { Command } from "../typings/";

export let command: Command = {
  name: "ping",
  description: "Тестовое сообщение + пинг бота",
  category: "Информация",
  options: [],
  run: async (interaction, client, f) => {
    // Отправляем сообщение
    interaction.reply({
      embeds: [
        f.aembed(
          // client.ws.ping пинг вебсокета бота
          `🏓 | Понг!`,
          `Пинг бота составляет ${client.ws.ping}`,
          f.colors.default
        ),
      ],
    });
  },
};
