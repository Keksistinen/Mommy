const Discord = require('discord.js')

module.exports = {
    name: 'paljonko kello on',
    description: 'Clock',
    detailedDescription: 'KELLO SAATANAa',
    execute(message = Discord.Message.prototype, args = []) {

        var currentdate = new Date();
        var datetime = currentdate.toLocaleString('en-us', { timeZone: 'Europe/Helsinki' }).split(',')[1].trim()

        const Clockembed = new Discord.MessageEmbed()
        .setTitle('Kello näyttäisi olevan ' + datetime + ' paikallista aikaa.')
        .setAuthor({ name: 'Mommy - Ajannäyttäjä', iconURL: 'https://cdn.discordapp.com/attachments/815701611070095402/1129741468752416818/db051adc6b1e0ed129ab2fa1ececf049.jpg' })
        .setColor('a16fab')
        .setFooter({ text: 'Lé Toveri Keksistinen - Author of Mommy', iconURL: 'https://cdn.discordapp.com/attachments/815701611070095402/1129741468752416818/db051adc6b1e0ed129ab2fa1ececf049.jpg' })

        message.channel.send({ embeds: [Clockembed] })
    },
}


