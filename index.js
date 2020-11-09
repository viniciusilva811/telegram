const TelegramBot = require('node-telegram-bot-api');

const token = '1394297392:AAF_IQ7ioB5zfReIoYfoWEwQvOuLkvx1hSI';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', function(msg){
    const chatId = msg.chat.chatId;
    console.log(msg.text);
    bot.sendMessage(chatId, 'Obrigado...');
});