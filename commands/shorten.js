const Discord = require("discord.js")
const BitlyClient = require("bitly")
const bitly = BitlyClient(process.env.BITLY_CODE)
var db = require("quick.db")
var us = new db.table("URLShortener")

exports.run = (client, message, args, config, dir) => {
  us.fetch(message.guild.name).then(guild => {
    if (message.guild.id == guild) return message.channel.send("**This command is unavailable for this server.** :x:");
    if (!args[0]) return message.channel.send("**Please input a URL.**");
    var shortened;
    message.delete()
    bitly.shorten(args).then(code => {message.channel.send(`**Here you go: <${code["data"]["url"]}>**`);});
  });
}