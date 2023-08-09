const TelegramAPI = require("node-telegram-bot-api");

const img =
  "https://vidviday.ua/storage/media/tour/3147/polonyna-borzhava-3x2.jpg";
// const { TOKEN } = process.env;
const bot = new TelegramAPI(process.env.TOKEN, { polling: true });
const { info, help } = require("./ansver");
bot.on("message", async (message) => {
  const text = message.text;
  const msgId = message.id;
  const chatId = message.chat.id;
  const name = message.from.first_name;
  if (text === "/start") {
    await bot.sendPhoto(chatId, img);
    console.log(img);
    await bot.sendMessage(chatId, `Вітаю ${name} в чат боті 'BeReady'`);
  }
  if (text === "/info") {
    await bot.sendMessage(chatId, info);
  }
  if (text === "/help") {
    await bot.sendMessage(chatId, help);
  }
  console.log(message);
});
