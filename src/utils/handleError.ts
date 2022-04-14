// Импортируем штучки
import { MessageEmbed, ColorResolvable } from "discord.js";
// Импортируем Функции
import { parseRus } from "./translate";

// Экспортируем функцию
export default async (
  interaction: any,
  err: any,
  color: ColorResolvable // Рекомендую не менять
) => {
  const ruserror = await parseRus(err.message); // Переводим ошибку на русский
  const Embed = new MessageEmbed(); // Инитилизируем Эмбед

  await interaction.deferReply().catch(() => {}); // Если ответ не был отложен, то отложить

  // Создаём Эмбед
  Embed.setTitle(":x: | Ошибка").setDescription(
    `${ruserror} (Переведенно [Google Translate](https://www.npmjs.com/package/@vitalets/google-translate-api))`
  );

  Embed.setColor(color)
    .setFooter({
      text: "AndromedaProject", // Замените тут на своё название
      iconURL:
        "https://cdn.discordapp.com/avatars/912683834028458045/22971e4d269906dd5ca3aa472b159f8e.webp?size=32", // Замените тут на свою аватарку
    })
    .setTimestamp();

  // Отправляем Эмбед
  return interaction.editReply({ embeds: [Embed] });
};
