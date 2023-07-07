const Discord = require("discord.js")

exports.run = (client, message, args, config, dir) => {
  if (message.author.id !== "189652275499761665") return
  client.fetchUser("235088799074484224").then(user => {
    console.log(user.client.guilds.array().length)
  })
}