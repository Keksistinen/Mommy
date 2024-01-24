const userRoleAddEmbed = new Discord.MessageEmbed ()

        .setTitle('Manageri')
        .setDescription(`<@${member.id}> myönnettiin rooli Asukas. Squeak Squeak!`)
        .setAuthor({ name: 'Mommy', iconURL: 'https://cdn.discordapp.com/attachments/815701611070095402/1129741468752416818/db051adc6b1e0ed129ab2fa1ececf049.jpg' })
        .addFields(
            { name: 'Käyttäjänimi', value: `<@${member.id}>` },
            { name: 'Käsittelijä', value: `${member}`},
        )
        .setFooter({ text: 'Lé Toveri Keksistinen - Author of Mommy', iconURL: 'https://cdn.discordapp.com/attachments/815701611070095402/1129741468752416818/db051adc6b1e0ed129ab2fa1ececf049.jpg' })