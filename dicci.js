//Requirements
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const db = require("quick.db");
var guilds = [];
var Prefix = new db.table("CustomPrefix");
const glitchup = require("glitchup");
glitchup();
client
  .login("")
  .catch(console.error);
const express = require("express");
const app = express();

//Command Handlers
client.on("message", message => {
  Prefix.fetch(message.guild.id).then(p => {
    if (message.author.bot) return;
    if (message.channel.type !== "text") return;
    if (message.content.indexOf(p) !== 0) return;
    const dir = "./commands";

    const args = message.content
      .slice(p.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
      let commandFiled = require(`./commands/${command}.js`);
      commandFiled.run(client, message, args, config, dir);
    } catch (err) {
      console.log(err);
    }
  });
});

//Bot Things
client.on("ready", () => {
  client.user.setActivity("@dicci.js prefix", {
    type: "STREAMING",
    url: "https://www.twitch.tv/monstercat"
  });
  console.log("Bot is up and running!");
  client.guilds.array().forEach(g => guilds.push(g.name));
  console.log(guilds.length);
  console.log(guilds);
});

client.on("error", err => console.error(err));

//Custom Prefix Database
client.on("guildCreate", guild => {
  Prefix.set(guild.id, "d.");
});

//Bot Mentioned Prefix
client.on("message", message => {
  Prefix.fetch(message.guild.id).then(p => {
    if (message.author.bot) return;
    if (message.channel.type !== "text") return;
    if (message.isMentioned("437241012281278485")) {
      const args = message.content.trim().split(/ +/g);
      if (
        args[0] == "<@437241012281278485>" ||
        args[0] == "<@!437241012281278485>"
      ) {
        if (args[1] == "prefix") {
          message.channel.send(`The prefix for this guild is \`${p}\``);
        }
      }
    }
  });
});

client.on("guildMemberAdd", member => {
  if (member.guild.id != "618398440912715776") return;
  const guild = client.guilds.get("618398440912715776");
  const em = new Discord.RichEmbed();
  em.setAuthor(member.user.username, member.user.displayAvatarURL)
    .setTitle("Member Joined")
    .setDescription(`Welcome to ${guild.name}, <@${member.user.id}>.`)
    .setThumbnail(member.user.displayAvatarURL)
    .setColor("#8ce340")
    .setFooter(guild.name, guild.iconURL);
  client.channels.get("620324778385080340").send(em);
});

client.on("guildMemberRemove", member => {
  if (member.guild.id != "618398440912715776") return;
  const guild = client.guilds.get("618398440912715776");
  const em = new Discord.RichEmbed();
  em.setAuthor(member.user.username, member.user.displayAvatarURL)
    .setTitle("Member Left")
    .setDescription(`<@${member.user.id}> has left ${guild.name}.`)
    .setThumbnail(member.user.displayAvatarURL)
    .setColor("#8ce340")
    .setFooter(guild.name, guild.iconURL);
  client.channels.get("620324778385080340").send(em);
});



//express
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
