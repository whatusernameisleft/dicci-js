const Discord = require("discord.js")
const gClient = require("google-images")
const db = require("quick.db")
let rimg = new db.table("RandomImage")
const img = new gClient("", "")

exports.run = (client, message, args, config, dir) => {
  rimg.fetch(message.guild.name).then(guild => {
    if (message.guild.id == guild) return message.channel.send("**This command is unavailable for this server.** :x:");
    if (!args[0]) return message.channel.send("Search for a random image from the word/phrase provided.");
  
    const em = new Discord.RichEmbed();
    let rint = Math.floor(Math.random() * 10)
    let rpage = Math.floor(Math.random() * 5)
  
    img.search(args.join(" "), {page: rpage}).then(image => {
      if(image[0] == null) return message.channel.send(`:x: No Image was found. Try again with different search string.`);
      em.setTitle(`Random Image for [${args.join(" ")}]`)
      .setFooter("dicci.js© 2019", client.user.displayAvatarURl)
      .setColor("RANDOM")
      .setTimestamp()
      .setImage(image[rint].url)
      .setURL(image[rint].url);
     
       message.channel.send(em);
    });
  })
}