const Discord = require("discord.js");
const steam = require("steam-provider");

exports.run = (client, message, args, config, dir) => {
  if (!args[0]) return message.channel.send("You aren't really searching for anything.");
  
  const provider = new steam.SteamProvider();
  const em = new Discord.RichEmbed();
  
  provider.search(args.join(" ")).then(res => {
    em.setAuthor("Top Search Result", "https://s3.amazonaws.com/freebiesupply/large/2x/steam-logo-transparent.png")
      .setTitle(`${res[0].name} on Steam`)
      .setURL(res[0].url)
      .setColor("RANDOM");
    provider.detail(res[0].id).then(res => {
      em.addField("Initital Price", `$${res.priceData.initialPrice}`, true)
        .addField("Final Price", `$${res.priceData.finalPrice}`, true)
        .addField("Discount Percent", `${res.priceData.discountPercent}%`, true)
        .addField("Metacritic Score", res.otherData.metacriticScore ? `${res.otherData.metacriticScore}/100` : `N/A`, true)
        .addField("Platforms", res.otherData.platforms, true)
        .addField("Additional Info", `**Developer: **${res.otherData.developer}\n**Publisher: **${res.otherData.publisher}`, true)
        .setImage(res.otherData.imageUrl)
        .setFooter("dicci.js© 2019", client.user.displayAvatarURL)
        .setTimestamp();
      
      message.channel.send(em)
    })
  })
  
  // setTimeout(search, 1750)
  // function search() {
  //   message.channel.send(em)
  // }
}