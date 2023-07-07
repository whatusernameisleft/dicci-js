const Discord = require("discord.js")
const db = require("quick.db")
let us = new db.table("URLShortener")
let gg = new db.table("GoogleSearch")
let img = new db.table("Image")
let rimg = new db.table("RandomImage")
let urban = new db.table("Urban")

exports.run = (client, message, args, config, dir) => {
  if (message.member != message.guild.owner) return message.channel.send("**You ain't the server owner!**");
  if (!args[0]) return message.channel.send("Commands currently available to enable: ``shorten || google || img || rimg || urban``\n**|| = or**");
  if (args[0] == "shorten") {
    us.delete(message.guild.name)
    message.channel.send("**You have enabled the URL Shortener command.** :heavy_check_mark:")
    return;
  }
  if (args[0] == "google") {
    gg.delete(message.guild.name)
    message.channel.send("**You have enabled the Google Search command.** :heavy_check_mark:")
    return;
  }
  if (args[0] == "img") {
    img.delete(message.guild.name)
    message.channel.send("**You have enabled the Image Search command.** :heavy_check_mark:")
  }
  if (args[0] == "rimg") {
    rimg.delete(message.guild.name)
    message.channel.send("**You have enabled the Random Image Search command.** :heavy_check_mark:")
  }  
  if (args[0] == "urban") {
    urban.delete(message.guild.name)
    message.channel.send("**You have enabled the Urban Dictionary command.** :heavy_check_mark:")
  }
}