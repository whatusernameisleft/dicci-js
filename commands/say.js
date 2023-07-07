const Discord = require("discord.js")

exports.run = (client, message, args, config, dir) => {
  if (message.author.id != "189652275499761665") return message.delete();
  message.delete();
  message.channel.send(args.join(" "))
}