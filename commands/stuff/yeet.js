const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'tetest',
    description: 'nUm',
    detailedDescription: 'yes',
    execute(message = Discord.Message.prototype, args = []) {

        const userSchemaEmbed = new Discord.MessageEmbed()
        
        .setTitle('Uusi jäsen on ilmestynyt!')
        .setDescription('Toveri Valtakunnankansleri on saapunut keskuuteemme. Anna hänelle rooli.')
        .setAuthor({ name: 'Mommy', iconURL: 'https://cdn.discordapp.com/attachments/815701611070095402/1129741468752416818/db051adc6b1e0ed129ab2fa1ececf049.jpg' })
        .setColor('a16fab')
        .setFooter({ text: 'Lé Toveri Keksistinen - Author of Mommy', iconURL: 'https://cdn.discordapp.com/attachments/815701611070095402/1129741468752416818/db051adc6b1e0ed129ab2fa1ececf049.jpg' })

        message.channel.send({ embeds: [userSchemaEmbed], components: [row] });
        

    },
}