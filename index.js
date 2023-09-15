const TelegramApi = require('node-telegram-bot-api')

const TOKEN = '6605002467:AAH9VyYh3ndkn63OtP2BHNdKJ2CQkCURu9s'

const bot = new TelegramApi(TOKEN, { polling: true })
const start = () => {


	bot.on('message', async (msg) => {
		const text = msg.text;
		const chatId = msg.chat.id;

		if (text === '/start') {
			if (msg.from.id === 655647523) {
				return bot.sendMessage(chatId, `Привет Крутой`)
			}
			if (msg.from.id === 802285750) {
				return bot.sendMessage(chatId, `Привет Даша`)
			}
			if (msg.from.username === 'denisepifan') {
				return bot.sendMessage(chatId, `Привет Газовщик`)
			}
			if (msg.from.username === 'dmtss') {
				return bot.sendMessage(chatId, `Привет Дима`)
			}
			if (msg.from.username === 'OlesyaEpifanova') {
				return bot.sendMessage(chatId, `Привет Олеся`)
			}
			if (msg.from.id === 268248184) {
				return bot.sendMessage(chatId, `Привет Таня`)
			}
			return bot.sendMessage(chatId, `Добро пожаловать жопотрясник`)
		} else if (text === '/info') {
			console.log("MSG", msg)
			return bot.sendMessage(chatId, `Твой ник в тг ${msg.from.username}, id = ${msg.from.id}`)
		}
		else {
			return bot.sendMessage(chatId, `Гамарджоба, твой текст ${text}`)
		}
	})
	bot.setMyCommands([
		{ command: '/start', description: 'Старт бота' },
		{ command: '/info', description: 'Узнать свой ник, id' }
	])
}


start()




