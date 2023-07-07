const Discord = require("discord.js")
const db = require("quick.db")
let us = new db.table("URLShortener")
let gg = new db.table("GoogleSearch")
let img = new db.table("Image")
let rimg = new db.table("RandomImage")
let urban = new db.table("Urban")

exports.run = (client, message, args, config, dir) => {
  if (message.member != message.guild.owner) return message.channel.send("**You ain't the server owner!**");
  if (!args[0]) return message.channel.send("Commands currently available to disable: ``shorten || google || img || rimg || urban``\n**|| = or**");
  if (args[0] == "shorten") {
    us.set(message.guild.name, message.guild.id)
    message.channel.send("**You have disabled the URL Shortener command.** :x:")
    return;
  }
  if (args[0] == "google") {
    gg.set(message.guild.name, message.guild.id)
    message.channel.send("**You have disabled the Google Search command.** :x:")
    return;
  }
  if (args[0] == "img") {
    img.set(message.guild.name, message.guild.id)
    message.channel.send("**You have disabled the Image Search command.** :x:")
  }
  if (args[0] == "rimg") {
    rimg.set(message.guild.name, message.guild.id)
    message.channel.send("**You have disabled the Random Image Search command.** :x:")
  }
  if (args[0] == "urban") {
    urban.set(message.guild.name, message.guild.id)
    message.channel.send("**You have disabled the Urban Dictionary command.** :x:")
  }
}