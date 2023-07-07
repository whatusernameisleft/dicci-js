const Discord = require("discord.js")

exports.run = (client, message, args, config, dir) => {
  const embed = new Discord.RichEmbed()
  embed.setAuthor(`${message.guild.name} roles`, message.guild.iconURL)
       .setDescription(message.guild.roles.map(role => `${role}`).sort().join("●").replace("●@everyone", ""))
       .setColor("36393E")
       .setTimestamp()
  
  message.channel.send(embed)
}