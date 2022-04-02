// Импортируем Мэнеджер кластера
import { Manager } from 'discord-hybrid-sharding';
// Импортируем конфиг
import config from './config'
// Игнорируем ошибку поскольку typescript не знает что такое __dirname
// @ts-ignore
const manager = new Manager(`${__dirname}/index.js`, {
    totalShards: 'auto', // Или можете ввести какую-то цифру
    shardsPerClusters: 2,
    mode: 'process',
    token: config.token, // Вводите токен только если у вас totalShards равен auto
});
// Лог в консоль
manager.on('clusterCreate', cluster => console.log(`[cluster.ts] Запущен кластер ${cluster.id}`));
// Спавн кластера
manager.spawn({ timeout: -1 });