const Discord = require("discord.js")
const gClient = require("google-images")
const db = require("quick.db")
var Img = new db.table("Image")
const img = new gClient("", "")

exports.run = (client, message, args, config, dir) => {
  Img.fetch(message.guild.name).then(guild => {
    if (message.guild.id == guild) return message.channel.send("**This command is unavailable for this server.** :x:");
    if (!args[0]) return message.channel.send("Search for the top image from the word/phrase provided.");
  
  const em = new Discord.RichEmbed();
   img.search(args.join(" ")).then(image => {
    if(image[0] == null) return message.channel.send(`:x: No Image was found. Try again with different search string.`);
    em.setTitle(`Top Image for [${args.join(" ")}]`)
    .setFooter("dicci.js© 2019", client.user.displayAvatarURl)
    .setColor("RANDOM")
    .setTimestamp()
    .setImage(image[0].url)
    .setURL(image[0].url);
     
     message.channel.send(em);
  });
  })
}