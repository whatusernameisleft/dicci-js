const Discord = require("discord.js")
const npm = require("search-npm-registry")
const img = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1280px-Npm-logo.svg.png";

exports.run = (client, message, args, config, dir) => {
  let names = [];
  const em = new Discord.RichEmbed();
  (async () => {
    const result = await npm()
      .text(args.join(" "))
      .size(1)
      .search();
    
    result[0].maintainers.forEach(u => {
      names.push(u.username)
    })
    
    em.setTitle(`Top package for [${args.join(" ")}]`)
      .setThumbnail(img)
      .setColor("#D13F3F")
      .setFooter("dicci.js© 2019", client.user.displayAvatarURL)
      .setTimestamp()
      .setURL(result[0].links.npm)
      .addField("Name", `\`${result[0].name}\``, true)
      .addField("Version", `\`v${result[0].version}\``, true)
      .addField("Author", `\`${result[0].author.name}\``, true)
      .addField("Publisher", `\`${result[0].publisher.username}\``, true)
      .addField("Homepage", result[0].links.homepage ? result[0].links.homepage : "N/A", true)
      .addField("Repository", result[0].links.repository ? result[0].links.repository : "N/A", true)
      .addField("Maintainers", `\`${names.join(", ")}\``, true)
      .addField("Description", `\`${result[0].description}\``, true)
    
    message.channel.send(em)
  })();
}