const Discord = require('discord.js');
const { Client, Message, MessageEmbed } = require('discord.js')
/**
 * @param {Client} client
 * @param {Message} message
 * @param {[]} args
 */


exports.run = async (client, message, args) => {
    try {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(1).join(" ") || "Tidak ada alasan";
        let author = message.guild.members.cache.get(message.author.id);

        // Ketika tidak ada di mention
        if (!member)
            return;

        // Ketika usernamenya sama ama yang di mention
        if (member.user.id === message.author.id)
            return message.reply('Anda tidak bisa membanned diri anda sendiri.');

        // Ketika yang membanned adalah member
        if (!author.hasPermission("KICK_MEMBERS"))
            return;

        // Ketika yang dibanned adalah admin/momod
        if (member.hasPermission("KICK_MEMBERS"))
            return message.reply('Anda tidak bisa membanned staff!');

        member.kick({ reason: reason })
            .then(kickMember => {
                message.reply(`Anda berhasil menendang **${kickMember.user.tag}** dengan alasan:\n${reason}`);
            })
            .catch(err => {
                message.reply(`Sepertinya ada masalah!\n\`\`\`${err.message}\`\`\``);
            });
        let embed = new MessageEmbed()
            .setAuthor(`KICK | ${member.user.tag}`)
            .setColor(client.warna.kato)
            .addField("User", member, true)
            .addField("Moderator", message.author, true)
            .addField("Alasan", reason, true)
            .setTimestamp()
            .setFooter(`${message.member.id}`, message.guild.iconURL())

        client.channels.cache.get("795778726930677790").send(embed);
    } catch (error) {
        return message.channel.send(`Something went wrong: ${error.message}`);
        // Restart the bot as usual.
    }
}

exports.conf = {
    aliases: ["tendang"],
    cooldown: 5
}

exports.help = {
    name: 'kick',
    description: 'Menendang user dari server',
    usage: 'k!kick <user> [reason]',
    example: 'k!kick @juned badung'
}