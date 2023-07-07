const Discord = require("discord.js")

exports.run = (client, message, args, config, dir) => {
  if (message.member != message.guild.owner) return message.channel.send("You ain't the owner boi! :x:");
  if (!args[0]) {
    message.channel.send("Usage: `setnick {userMention} {newNickname}`.")
    message.channel.send("**dicci.js's role must be the highest!**")
    return;
  }
  if (args[0].startsWith("<@!")) {
    message.guild.fetchMember(args[0].replace("<@!", "").replace(">", "")).then(u => {
      message.channel.send(`${args[0]}'s nickname was changed from \`${u.nickname}\` to \`${args.join(" ").replace(args[0], "").trim()}\``);
      u.setNickname(args.join(" ").replace(args[0], "").trim());
    })
  }
  else {
    message.guild.fetchMember(args[0].replace("<@", "").replace(">", "")).then(u => {
      message.channel.send(`${args[0]}'s nickname was changed from \`${u.nickname}\` to \`${args.join(" ").replace(args[0], "").trim()}\``);
      u.setNickname(args.join(" ").replace(args[0], "").trim());
    })
  }
}