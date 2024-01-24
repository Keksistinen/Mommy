const Discord = require('discord.js')

module.exports = {
    name: 'kerro quote',
    description: 'by nummi',
    detailedDescription: 'Numnum',
    execute(message = Discord.Message.prototype, args = []) {
            
        const quotes = [
            '"Unettomana nukkuminen voi olla vaarallisempaa ku kännis ajaminen"',
            '"Sua ei kyl olis olemassa jos sua ei ois tehty"',
            '"barbie ja oppenheimer on vähä ku animal crossing ja doom"',

        ]

        let randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
        message.channel.send(randomQuotes)
       
        
    },
}