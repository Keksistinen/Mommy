
const chalk = require('chalk');
const LOGO =

    `
,_ _                            
/| | |   _                       
 | | |  / \_/|/|/|  /|/|/|  |  | 
 | | |_/\_/  | | |_/ | | |_/ \/|/
                              (| 
                        
\n`;

console.log(chalk.magenta(LOGO));
console.log('[-=- Mommy -=-]');

const { ActionRowBuilder, MessageActionRow, MessageButton, ApplicationCommandType, ButtonBuilder, ButtonStyle, Client, ContextMenuCommandBuilder, ContextMenuCommandInteraction, EmbedBuilder, Events, GuildMember, SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, TextChannel, escapeCodeBlock } = require('discord.js');
const Discord = require('discord.js');
require('dotenv').config()
const { prefix } = require('./config.json');
const fs = require('fs');

const maintenancemode = false

const client = new Discord.Client({
    intents: ['GUILDS',
        'GUILD_EMOJIS_AND_STICKERS',
        'GUILD_INTEGRATIONS',
        'GUILD_WEBHOOKS',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_MESSAGES',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGE_TYPING',
        'GUILD_MEMBERS',
        'GUILD_BANS',
        'DIRECT_MESSAGES',
        'DIRECT_MESSAGE_REACTIONS',
        'DIRECT_MESSAGE_TYPING']
})

//Read commands from the commands directory
client.commands = new Discord.Collection()
const commandFolders = fs.readdirSync('./commands')

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'))
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`)
        client.commands.set(command.name, command)
    }
}


global.noniiError = function (errormessage) {
    console.log(chalk.bold.red('[Mommy] ') + chalk.red(errormessage))
}

global.noniiGood = function (hyvismessage) {
    console.log(chalk.bold.green('[Mommy] ') + chalk.green(hyvismessage))
}

const keksi = '<@221652595486228481>' // Keksin käyttäjä ID -> Mention

client.once('ready', () => {
    client.user.setStatus("online")
    client.user.setActivity('Ihqdaa', { type: 'STREAMING' })
    console.log(chalk.green('[Mommy] I am aliveee'));
    client.channels.cache.get(process.env.CHANNEL_D_ID1_B).sendTyping()
    client.channels.cache.get(process.env.CHANNEL_D_ID1_B).send('[System] ' + keksi + ' Olen hereillä :3')
    console.log('[System] ' + 'Huoltotila: ' + chalk.green(maintenancemode))
    console.log('[SystemFolders] ' + commandFolders)
    console.log('[SystemPrefix] ' + prefix)

    if (maintenancemode == true) return
    const embedOnline = new Discord.MessageEmbed()
        .setAuthor({ name: 'Mommy - System [Start]', iconURL: 'https://cdn.discordapp.com/attachments/815701611070095402/1129741468752416818/db051adc6b1e0ed129ab2fa1ececf049.jpg' })
        .setDescription('Olen hereillä :3')
        .setColor('#7fcd6a')
        .setFooter({ text: 'Lé Toveri Keksistinen - Author of Mommy', iconURL: 'https://cdn.discordapp.com/attachments/815701611070095402/1129741468752416818/db051adc6b1e0ed129ab2fa1ececf049.jpg' })
        .setThumbnail('https://cdn.discordapp.com/attachments/246928010408624128/992100309147070484/212e30e47232be03033a87dc58edaa95.png')
        .addField('System Status', 'Alive')
        .addField('Huoltotila Status', String(maintenancemode))
    client.channels.cache.get(process.env.CHANNEL_D_ID1_B).send({ embeds: [embedOnline] })

})


client.on("interactionCreate", async (interaction) => {
    if (!interaction.isButton()) return;
    if (!interaction.customId) return;


    const member = await interaction.guild.members.fetch(interaction.user.id);
    if (!member.roles.cache.has("816048632583028766")) {
        await interaction.reply({
            content: `Et sinä voi tehdä noin >:c`,
            ephemeral: true,
        });
        return;
    }

    const roleIdent = interaction.customId.split("_")[1];
    const targetUser = await interaction.guild.members.fetch(roleIdent).catch(error => {console.log('Rip häntä ei löytynyt')});

    
    if (!targetUser) {
        await interaction.reply(`Käyttäjää ei enää löydy :c`);
        return;
    }

    if (interaction.customId.startsWith("role_")) {

        await interaction.deferReply({ ephemeral: true });
        await targetUser.roles.add("815703394197962803");
        await interaction.editReply(`Rooli annettiin!! JejeJEjejeje!`);

        // ...yritetään poistaa namiska
        // (en tiedä onnistuuko)
        if (interaction.message.editable) {
            await interaction.message.edit({ components: [] });
        }

    }
    else if (interaction.customId.startsWith("ban_")) {

        interaction.reply({ephemeral: false, content: 'Käyttäjä heitetty pellolle! C:< Squeak!'})
        targetUser.ban({reason: 'Bannittu'})

        if (interaction.message.editable) {
            await interaction.message.edit({ components: [] });
        }
    }
});

client.on("guildMemberAdd", async (member) => {
    const infoChannel = await client.channels.fetch("1135611612510818344");
    console.log(chalk.bold.green('[Mommy] Uusi jäsen hyppäsi mestoille'));
    infoChannel.send('<@&816048632583028766> Tehkää työnne >:c');

    // ...tässä jemmataan käyttäjän ID tuohon napin customId-kenttään
    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId(`role_${member.id}`)
                .setLabel(`Anna rooli jeejee`)
                .setEmoji("🍐")
                .setStyle('SUCCESS'),

            new MessageButton()
                .setCustomId(`ban_${member.id}`)
                .setLabel(`Potkaise pellolle`)
                .setEmoji("💀")
                .setStyle('DANGER'),

        )

    const userSchemaEmbed = new Discord.MessageEmbed()

        .setTitle('Uusi jäsen ilmestyi! 🍪')
        .setDescription(` 👋 <@${member.id}> liittyi keskuuteemme. Anna hänelle rooli c: (tai bännää)`)
        .setAuthor({ name: 'Mommy', iconURL: 'https://cdn.discordapp.com/attachments/815701611070095402/1129741468752416818/db051adc6b1e0ed129ab2fa1ececf049.jpg' })
        .setColor('a16fab')
        .setFooter({ text: 'Lé Toveri Keksistinen - Author of Mommy', iconURL: 'https://cdn.discordapp.com/attachments/815701611070095402/1129741468752416818/db051adc6b1e0ed129ab2fa1ececf049.jpg' })



    await infoChannel.send({ embeds: [userSchemaEmbed], components: [row] });

});

client.on('messageCreate', msg => {
    if (maintenancemode && msg.author.id != 221652595486228481) return
    if (msg.author.bot) return // If the message is sent by a bot, do nothing
    if (msg.mentions.users.has(client.user.id)) {
    }

    if (msg.mentions.users.has(client.user.id)) {
        msg.channel.send(`Paikalla! :airplane:`)
    }

    if (!msg.content.toLowerCase().startsWith(prefix)) return //If the message doesn't start with the prefix, do nothing

    if (!msg.guild) return msg.channel.send("Ei pyge")

    let args = msg.content.slice(prefix.length).trim().split(/ +/);
    let command = null;

    for (let i = args.length < 6 ? args.length : 6; i > 0; i--) {
        let tempCmd = args.slice(0, i).join(" ");
        if (client.commands.has(tempCmd)) {
            command = client.commands.get(tempCmd)
            args = args.splice(i)
            break;
        }
    }

    if (!command) {
        const msgs = [
            "Minulla ei ole mitään hajua mitä haluat minun tekevän :bone:",
            "Eei kyl nyt onnnaa",
            "Ei pysty",
            "EPEK = Ei pysty ei kykene",
            "En voi toteuttaa pyyntöäsi",
            "Ei huvita toteuttaa komentoasi nyt, katsotaanko myöhemmin?",
            "E",
        ]
        let randomMsg = msgs[Math.floor(Math.random() * msgs.length)]
        msg.channel.send(randomMsg)
        return
    }
    // command = client.commands.get(command) //gets the actual command object


    try {
        command.execute(msg, args)
    } catch (error) {
        console.error(error)
        msg.reply("Lahos saatana")
    }
})


process.on('exit', function () {
    client.destroy()
})

process.on('SIGINT', function () {
    client.destroy()
    process.abort()
})

client.login(process.env.TOKEN)

