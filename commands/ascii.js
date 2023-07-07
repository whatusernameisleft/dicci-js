const Discord = require("discord.js")
const ascii = require("ascii-art")

exports.run = (client, message, args, config, dir) => {
  ascii.font(args.join(" "), "Doom", rendered => {
    message.channel.send("```" + rendered + "```");
  });
}