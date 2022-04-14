// Импортируем всякие штучки
import { ColorResolvable, MessageEmbed } from "discord.js";

// Экспортируем функцию
export default (
  rustitle: string,
  rusdesc: string,
  color: ColorResolvable, // ColorResolvable = Цвет который discord.js распознаёт
  imgif?: string
) => {
  let compareTitle = rustitle.toLowerCase(); // Изменяем название чтобы всё было написано lowercase
  // Изменяем титул
  if (compareTitle == "ошибка") rustitle = ":x: | Ошибка!";
  if (compareTitle == "успешно") rustitle = ":white_check_mark: | Успешно!";

  const Embed = new MessageEmbed(); // Создаём новый Эмбед

  // Делаем эмбед
  Embed.setTitle(rustitle)
    .setDescription(rusdesc)
    .setColor(color)
    .setFooter({
      text: "RewrittenAndromeda", // Замените тут на своё название
      iconURL:
        "https://cdn.discordapp.com/avatars/958077423080067124/1bf56bded0f8fa3581c618b6750035ba.webp?size=2048", // Замените тут на свою аватарку
    })
    .setTimestamp();
  // Если есть картинка то вставить
  if (imgif != null) Embed.setThumbnail(imgif);
  // Возвращаем эмбед
  return Embed;
};
