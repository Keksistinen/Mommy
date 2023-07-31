const Discord = require('discord.js')

module.exports = {
    name: 'aktivoi huoltotila',
    description: 'Maintance mode activation',
    detailedDescription: 'yes',
    execute(message = Discord.Message.prototype, args = []) {
        message.reply('Järjestelmä ajettu alas huoltotilaan. Tietokanta aktiivinen ja vastaan ainoastaan sinun komentoihisi.')
        

    },
}