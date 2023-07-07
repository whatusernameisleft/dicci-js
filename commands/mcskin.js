const Discord = require("discord.js")
const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const {window} = new JSDOM()
const $ = require("jquery")(window)
const mcColor = require("minecraft-colors")

exports.run = (client, message, args, config, dir) => {
  message.channel.send("This command is currently under maintenance. Sorry for the inconvenience.")
  /*const em = new Discord.RichEmbed();
  let mapi = `https://api.mojang.com/users/profiles/minecraft/galaxy_crusher?callback=?`
  // let uuid = `https://api.minetools.eu/uuid/${args[0]}`;
  let skin = `https://visage.surgeplay.com/full/512/`;
  let namemc = `https://namemc.com/profile/`;
    
  $.getJSON(mapi, player => {
    em.setTitle(`${player.name}'s Minecraft Profile`)
      .addField("Name", `\`${player.name}\``)
      .addField("ID", `\`${player.id}\``)
      // .setURL(namemc + player.name)
      // .setImage(skin + player.id)
      .setFooter("dicci.js© 2018", client.user.avatarURL)
      .setColor("#3bf3c3")
      .setTimestamp();
    message.channel.send(em);
  })*/
}