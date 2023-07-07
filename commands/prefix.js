const Discord = require("discord.js")
const db = require("quick.db")
const ascii = require("ascii-art")
var Prefix = new db.table("CustomPrefix")

exports.run = (client, message, args, config, dir) => {
  Prefix.fetch(message.guild.id).then(p => {
    const em = new Discord.RichEmbed();
    ascii.font(p, "Doom", rendered => {
      message.channel.send(`The server's custom prefix is currently: \`${p}\``)
      message.channel.send("```" + rendered + "```")
    })
  })
}