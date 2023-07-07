const Discord = require("discord.js")
const db = require("quick.db")
var Prefix = new db.table("CustomPrefix")

exports.run = (client, message, args, config, dir) => {
  if (message.member !== message.guild.owner) return message.channel.send("You ain't the owner! :x:");
  Prefix.fetch(message.guild.id).then(p => {
    const em = new Discord.RichEmbed();
    em.setDescription(`Server custom prefix has been deleted. :white_check_mark:`)
      .setColor("36393E");
    message.channel.send(em);
    Prefix.set(message.guild.id, "d.")
  })
}