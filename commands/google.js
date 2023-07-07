const Discord = require("discord.js")
const google = require("google-search")
const googleImg = require("google-images")
const db = require("quick.db")
var gg = new db.table("GoogleSearch")
const gClient = new googleImg("", "")
const googleSearch = new google({
  key: "",
  cx: ""
});

exports.run = (client, message, args, config, dir) => {
  gg.fetch(message.guild.name).then(guild => {
    if (message.guild.id == guild) return message.channel.send("**This command is unavailable for this server.** :x:");
  if (!args[0]) return message.channel.send("Why are you not Googling anything?!");
  else {
  const em = new Discord.RichEmbed();
  
  em.setAuthor(`First 5 results for [${args.join(" ")}]`, "https://tinyurl.com/o3vyvjs")
    .setColor("#34A853")
    .setFooter("dicci.js© 2019", client.user.displayAvatarURL)
    .setTimestamp()
  
  googleSearch.build({
    q: args.join(" "),
    start: 1,
    lr: "lang_en",
    num: 5
  }, (err, res) => {
    try{
      for (var i = 0; i < res.items.length; i++) {
        em.addField(`Result [${i + 1}]`, `[${res.items[i].title}](${res.items[i].link})`)
      }
    }
    catch (e) {
      em.addField("Such Emptiness...", "[Feels Bad](https://www.youtube.com/watch?v=4zLfCnGVeL4)");
    }
  });

  gClient.search(args.join(" ")).then(img => {em.setThumbnail(img[0].url);});
    
  setTimeout(wait, 1000);
  function wait() {
    message.channel.send(em)
  }
  }
  })
}
