const Discord = require("discord.js")
const cowsay = require("cowsay")

exports.run = (client, message, args, config, dir) => {
  if (!args[0]) return message.channel.send("You aren't letting the cow to think about anything.");
  let output = cowsay.think({text: args.join(" ")})
  message.channel.send("```" + output + "```")
}