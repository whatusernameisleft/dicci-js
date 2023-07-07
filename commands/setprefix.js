const Discord = require("discord.js")
const db = require("quick.db")
var Prefix = new db.table("CustomPrefix")

exports.run = (client, message, args, config, dir) => {
  if (message.member !== message.guild.owner) return message.channel.send("You ain't the owner! :x:");
  Prefix.fetch(message.guild.id).then(p => {
    if (!args[0]) return message.channel.send(`**Usage**: \`${p}setprefix {newPrefix}\``);
    const em = new Discord.RichEmbed();
    em.setDescription(`Server prefix has been changed from \`${p}\` to \`${args[0]}\` :white_check_mark:`)
      .setColor("36393E");
    message.channel.send(em);
    Prefix.set(message.guild.id, args[0])
  })
}