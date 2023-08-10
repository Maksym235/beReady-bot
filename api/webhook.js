module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
};

const TelegramBot = require("node-telegram-bot-api");
const token = "6646615366:AAF9yWxBEFQauni-jLs9_RTcVILA5m-AKoY";
// Export as an asynchronous function
// We'll wait until we've responded to the user
module.exports = async (request, response) => {
  try {
    // Create our new bot handler with the token
    // that the Botfather gave us
    // Use an environment variable so we don't expose it in our code
    const bot = new TelegramBot(token);

    // Retrieve the POST request body that gets sent from Telegram
    const { body } = request;

    // Ensure that this is a message being sent
    // if (body.message) {
    // Retrieve the ID for this chat
    // and the text that the user sent
    // const {
    //   chat: { id },
    //   text,
    // } = body.message;

    // Create a message to send back
    // We can use Markdown inside this
    // const message = `✅ Thanks for your message: *"${text}"*\nHave a great day! 👋🏻`;

    // Send our new message back in Markdown and
    // wait for the request to finish
    // await bot.sendMessage(id, message, { parse_mode: "Markdown" });
    // }
    const info =
      "Це телеграм бот BeReady \n\n створений для комфортної підготовки до походів, аби ви не забули взяти з собою все необхідне.\n\n Всі команди ви можете переглянути в розділі /help";
    const help =
      "======================\n /start - розпочати чат. \n /info - інформація про чат-бота. \n /help -список команд. \n ======================";

    if (body.message.text === "/start") {
      const {
        text,
        chat: { id },
        from: { first_name },
      } = body.message;
      await bot.sendPhoto(chatId, img);
      await bot.sendMessage(chatId, `Вітаю ${first_name} в чат боті 'BeReady'`);
    }

    if (body.message.text === "/info") {
      await bot.sendMessage(chatId, info);
    }
    if (body.message.text === "/help") {
      await bot.sendMessage(chatId, help);
    }
  } catch (error) {
    // If there was an error sending our message then we
    // can log it into the Vercel console
    console.error("Error sending message");
    console.log(error.toString());
  }

  // Acknowledge the message with Telegram
  // by sending a 200 HTTP status code
  // The message here doesn't matter.
  response.send("OK");
};
