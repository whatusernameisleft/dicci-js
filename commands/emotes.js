const Discord = require("discord.js")

exports.run = (client, message, args, config, dir) => {
  if (message.guild.emojis.array().length == "0") return message.channel.send("This server doesn't have any custom emojis! :x:");
  const em = new Discord.RichEmbed()
  em.setAuthor(`All Emojis For ${message.guild.name}. Total: [${message.guild.emojis.array().length}]`, message.guild.iconURL)
    .setDescription(`${message.guild.emojis.array().join("")}`)
    .setColor("RANDOM")
    .setFooter("dicci.js© 2019", client.user.displayAvatarURL)
    .setTimestamp();
  
  message.channel.send(em)
}