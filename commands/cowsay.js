const Discord = require("discord.js")
const cowsay = require("cowsay")

exports.run = (client, message, args, config, dir) => {
  if (!args[0]) return message.channel.send("You aren't letting the cow to say anything.");
  let output = cowsay.say({text: args.join(" ")})
  message.channel.send("```" + output + "```")
}