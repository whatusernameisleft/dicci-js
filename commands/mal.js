const Discord = require("discord.js")
const mal = require("mal-scraper")
const db = require("quick.db")
const Prefix = new db.table("CustomPrefix")
const search = mal.search

exports.run = (client, message, args, config, dir) => {
  Prefix.fetch(message.guild.id).then(p => {
    const em = new Discord.RichEmbed()
    const type = args.shift()
    if (!type) return message.channel.send(`Usage **|** \`${p}mal {anime|manga} {searchQuery}\``);

    switch(type) {
      case "anime":
        if (!args[0]) return message.channel.send("Please enter a search query.")
        search.search("anime", {
          maxResults: 1,
          term: args.join(" ")
        }).then(list => {
          const res = list[0]
          em.setTitle(res.title)
            .setURL(res.url)
            .setThumbnail(res.thumbnail)
            .setDescription(res.shortDescription)
            .addField("Type", res.type, true)
            .addField("Score", res.score, true)
            .addField("Episodes", res.nbEps, true)
            .addField("Start Date", res.startDate, true)
            .addField("End Date", res.endDate, true)
            .addField("Rating", res.rating, true)
            .setTimestamp()
            .setColor("RANDOM")
            .setFooter(message.author.username, message.author.displayAvatarURL)
          
          message.channel.send(em)
        })
        break
      case "manga":
        if (!args[0]) return message.channel.send("Please enter a search query.")
        search.search("manga", {
          maxResults: 1,
          term: args.join(" ")
        }).then(list => {
          const res = list[0]
          em.setTitle(res.title)
            .setURL(res.url)
            .setThumbnail(res.thumbnail)
            .setDescription(res.shortDescription)
            .addField("Type", res.type, true)
            .addField("Score", res.startDate, true)
            .addField("Start Date", res.endDate, true)
            .addField("End Date", res.members, true)
            .setTimestamp()
            .setColor("RANDOM")
            .setFooter(message.author.username, message.author.displayAvatarURL)
          
          message.channel.send(em)
        })
        break
      default:
        message.channel.send(`Usage **|** \`${p}mal {anime|manga} {searchQuery}\``)
    }
  })
}