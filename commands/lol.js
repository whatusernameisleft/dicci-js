const Discord = require("discord.js")
const lol = require("lol")
const ascii = require("ascii-art")

exports.run = (client, message, args, config, dir) => {
  ascii.font(lol(), "Doom", rendered => {
    message.channel.send("```" + rendered + "```")
  })
}