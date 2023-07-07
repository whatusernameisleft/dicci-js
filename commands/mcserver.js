const Discord = require("discord.js")
const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const {window} = new JSDOM()
const $ = require("jquery")(window)
const mcColor = require("minecraft-colors")

exports.run = (client, message, args, config, dir) => {
  if (!args[0]) return message.channel.send("`Just do d.mcserver {serverIP}.`");
  const em = new Discord.RichEmbed();
  let mcapi = `https://mcapi.us/server/status?ip=${args[0]}`;
  $.getJSON(mcapi, data => {
    em.setTitle("Minecraft Server Info")
      .setDescription(`${mcColor.stripColors(data.motd)}\n ​`)
      .addField("Status", data.online ? "`Online`" : "`Offline`", true)
      .addField("Players", `\`${data.players.now}/${data.players.max}\``, true)
      .addField("Version", `\`${data.server.name}\``, true)
      .setColor("RANDOM")
      .setFooter(`dicci.js© 2019 || ${args[0]}`, client.user.displayAvatarURL)
      .setImage(`https://mcapi.us/server/image?ip=${args[0]}&theme=dark`)
      .setTimestamp();
      message.channel.send(em)
    });
}