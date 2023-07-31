const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'kerro juttuja',
    description: 'nUm',
    detailedDescription: 'yes',
    execute(message = Discord.Message.prototype, args = []) {

        
        message.channel.send('<@&816048632583028766> Uutta asiaa :3');
        const userSchemaEmbed = new Discord.MessageEmbed()
        
        .setTitle('Uusi lelu ⚔️')
        .setDescription(`Saatte käyttöönne uuden ja täysin customoidun itse tehdyn moderointiin tarkoitetun työkalun. Tuumasin että uusien jäsenten hyväksyminen/bannaaminen olisi paljon helpompaa jos tälle kanavalle tulee botilta ilmoitus. \n\ \n\ Kuka tahansa teistä voi helposti ja vaivattomasti antaa roolin tai potkia pellolle epäilyttävät muukalaiset. \n\ \n\ Käyttö tapahtuu seuraavasti: \n\ \n\ Jäsenilmoituksen alapuolella on kaksi nappia. Vihreä ja punainen. Vihreä antaa asukas-roolin ja punainen antaa permabannit. Botti poistaa napit kun suoritus on tehty. Käyttö edellyttää vähintään moderaattori-roolia tai laajempia oikeuksia omaavaa roolia.`)
        .setAuthor({ name: 'Mommy', iconURL: 'https://cdn.discordapp.com/attachments/815701611070095402/1129741468752416818/db051adc6b1e0ed129ab2fa1ececf049.jpg' })
        .setColor('a16fab')
        .setFooter({ text: 'Lé Toveri Keksistinen - Author of Mommy', iconURL: 'https://cdn.discordapp.com/attachments/815701611070095402/1129741468752416818/db051adc6b1e0ed129ab2fa1ececf049.jpg' })

        message.channel.send({ embeds: [userSchemaEmbed]});
        

    },
}