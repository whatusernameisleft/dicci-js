const Discord = require("discord.js")
const urban = require("urban.js")
const db = require("quick.db")
let urbandb = new db.table("Urban")

exports.run = (client, message, args, config, dir) => {
  urbandb.fetch(message.guild.name).then(guild => {
    if (message.guild.id == guild) return message.channel.send("**This command is unavailable for this server.** :x:");
  const em = new Discord.RichEmbed()
  const icon = "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-01-11/297387706245_85899a44216ce1604c93_512.jpg"
  const query = urban(args.join(" "))
  
  query.then(q => {
    em.setTitle(`True meaning of [${args.join(" ")}].`)
      .setURL(q.URL)
      .setColor("#000000")
      .setFooter("dicci.js© 2019", icon)
      .setTimestamp()
      .setDescription(`**Definition**\n${q.definition}`)
      .addField("Example", q.example)
      .addField("Author", `\`${q.author}\``, true)
      .addField("Rating", `:thumbsup: Upvotes: \`${q.thumbsUp}\` **||** :thumbsdown: Downvotes: \`${q.thumbsDown}\``, true);
    
    message.channel.send(em)
  })
  })
}