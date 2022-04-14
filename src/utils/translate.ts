// Импорт библиотеки для перевода текста, спасибо создателю библиотеки
import translate from "@vitalets/google-translate-api";

// Экспортируем функцию
export let parseRus = async (...input: any) => {
  input = input.join(" "); // Склеиваем все входящие параметры в одну переменную

  // Возвращаем Promise
  return new Promise(async (resolve) => {
    translate(input, { to: "ru" }) // Переводим текст на русский
      .then((res: any) => {
        resolve(res?.text); // Возвращаем текст
      })
      .catch((err: any) => resolve(err.message)); // Возвращаем ошибку если она есть
  });
};
