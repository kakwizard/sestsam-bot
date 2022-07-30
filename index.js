
const express = require('express');

const app = express();


const Discord = require("discord.js");
const client = new Discord.Client
const db = require('quick.db')
const info = require('./config.js')
const prefix = info.prefix
client.login(info.token).catch(error => console.log(`
You forgot to write a [token]`))
const owner = info.owner


client.on("ready", async () => {
  console.log(`"${client.user.username}" is ready`)//runing bot username

})
client.setMaxListeners(99999)
const ms = require("ms");
const cooldown = new Set();






client.on("message", message => {
  let command = db.get(`cmhelp_${message.author.id}_${message.guild.id}.cmhelp`)
  if (message.content.startsWith(prefix + command) ||
    message.content.startsWith(prefix + "help")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
      let lang = db.get(`lun_${message.guild.id}.lang`);
      if (lang == null || undefined) {
        return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
      }
      let blacklist = db.get(`sccblack_${message.author.id}.reason`)
      if (blacklist) {
        if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
        if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
      }
      let embedar = new Discord.MessageEmbed()
        .setTimestamp()
        .setTimestamp()
        .setTitle(`**الاوامر**`)
        .addField(':earth_africa: **عام**', `**
    \`ping\`,\`level\`,\`credit\`,\`daily\`,\`trans\`,\`set-commands\`,\`delete-commands\` 
    **`)
        .addField(':wrench: **اداريه**', `**
    \`set-level-rome\`,\`warn\`,\`remove-warn\`,\`user-warn\`,\`lock\`,\`unlock\`,\`mute\`,\`unmute\`,\`swearing-bot-off\`,\`swearing-bot-on\`
    **`)
        .addField(':low_brightness: **لغات**', `**
    \`set-lang-ar\`,\`set-lang-en\` 
    **`)
        .addField(':flower_playing_cards: **العاب**', `**
    \`question\`,\`flag\`
           **`)
        .addField(':speaking_head: **الاونر**', `**
    \`black-add\`,\`black-user\` ,\`black-remove\`
    **`)
      let embeden = new Discord.MessageEmbed()
        .setTimestamp()
        .setTimestamp()
        .setTitle(`**commands**`)
        .addField(':earth_africa: **General**', `**
        \`ping\`,\`level\`,\`credit\`,\`daily\`,\`trans\`,\`set-commands\`,\`delete-commands\` 
    **`)
        .addField(':wrench: **Moderator**', `**
        \`set-level-rome\`,\`warn\`,\`remove-warn\`,\`user-warn\`,\`lock\`,\`unlock\`,\`mute\`,\`unmute\`,\`swearing-bot-off\`,\`swearing-bot-on\`
    **`)
        .addField(':low_brightness: **langs**', `**
        \`set-lang-ar\`,\`set-lang-en\` 
    **`)
        .addField(':flower_playing_cards: **play**', `**
        \`question\`,\`flag\`
    **`)
        .addField(':speaking_head: **owner**', `**
        \`black-add\`,\`black-user\` ,\`black-remove\`
    **`)
      if (lang === "ar") return message.channel.send(embedar)
      if (lang === "en") return message.channel.send(embeden)
    }
  }
})





















client.on("message", message => {
  let command = db.get(`cmrlevel_${message.author.id}_${message.guild.id}.cmrlevel`)
  if (message.content.startsWith(prefix + command) ||
    message.content.startsWith(prefix + "set-level-rome")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("you don't have  permissions!");
    }
    let channel = message.mentions.channels.first()
    if (!channel) {
      return message.channel.send(`mentions channel `)
    }
    db.set(`channel_${message.author.id}_${message.guild.id}`, channel.id)
    message.channel.send(`**done**`)
  }
  }
})

client.on("message", message => {
  let command = db.get(`cmlevel_${message.author.id}_${message.guild.id}.cmlevel`)
  if (message.content.startsWith(prefix + command) ||
    message.content.startsWith(prefix + "level")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    let args = message.content.substring(prefix.length).split(" ");
    const user = message.mentions.users.first()
    if (!user && !args[1]) {
      let levels = db.get(`level_${message.author.id}_${message.guild.id}.level`)
      if (lang === "en") return message.channel.send(`**
    <@${message.author.id}> you level is \`${levels}\`
    **`)
      if (lang === "ar") return message.channel.send(`**
    <@${message.author.id}> مستواك \`${levels}\`
    **`)
    }
    if (user) {
      if (db.get(`level_${user.id}_${message.guild.id}.level`) === null);
      let levelu =
        db.get(`level_${user.id}_${message.guild.id}.level`)
      if (levelu === null) levelu = 0;
      if (user.bot) {
        if (lang === "en") return message.channel.send("don't have level  bots | ❌");
        if (lang === "ar") return message.channel.send("البوتات ليست لديها مستى | ❌");
      }
      if (lang === "en") return message.channel.send(`**
      <@${user.id}>  level is \`${levelu}\`
      **`)
      if (lang === "ar") return message.channel.send(`**
      <@${user.id}> مستواه \`${levelu}\`
      **`)

    }
    }
  }
})

client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-level")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    let clevel = message.content.split(" ").slice(1).join(" ")
    if (!clevel) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmlevel_${message.author.id}_${message.guild.id}`, { cmlevel: clevel })
    message.channel.send(`**${prefix}\`level\` => ${prefix}\`${clevel}\` **`)
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-rome-level")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }

    let crlevel = message.content.split(" ").slice(1).join(" ")
    if (!crlevel) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmrlevel_${message.author.id}_${message.guild.id}`, { cmrlevel: crlevel })
    message.channel.send(`**${prefix}\`rome-level\` => ${prefix}\`${crlevel}\` **`)
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-help")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    let crhelp = message.content.split(" ").slice(1).join(" ")
    if (!crhelp) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmhelp_${message.author.id}_${message.guild.id}`, { cmhelp: crhelp })
    message.channel.send(`**${prefix}\`help\` => ${prefix}\`${crhelp}\` **`)
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-credit")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }

    let crcredit = message.content.split(" ").slice(1).join(" ")
    if (!crcredit) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmcredit_${message.author.id}_${message.guild.id}`, { cmcredit: crcredit })
    message.channel.send(`**${prefix}\`credit\` => ${prefix}\`${crcredit}\`**`)
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-daily")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    let crdaily = message.content.split(" ").slice(1).join(" ")
    if (!crdaily) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmdaily_${message.author.id}_${message.guild.id}`, { cmdaily: crdaily })
    message.channel.send(`**${prefix}\`daily\` => ${prefix}\`${crdaily}\`**`)
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-trans")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }

    let crtrans = message.content.split(" ").slice(1).join(" ")
    if (!crtrans) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmtrans_${message.author.id}_${message.guild.id}`, { cmtrans: crtrans })
    message.channel.send(`**${prefix}\`trans\` => ${prefix}\`${crtrans}\`**`)
  }
  }
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-warn")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    let crwarns = message.content.split(" ").slice(1).join(" ")
    if (!crwarns) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmwarn_${message.author.id}_${message.guild.id}`, { cmwarn: crwarns })
    message.channel.send(`**${prefix}\`warn\` => ${prefix}\`${crwarns}\`**`)
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-remove-warn")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }

    let crrwarns = message.content.split(" ").slice(1).join(" ")
    if (!crrwarns) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmrwarn_${message.author.id}_${message.guild.id}`, { cmrwarn: crrwarns })
    message.channel.send(`**${prefix}\`remove-warn\` => ${prefix}\`${crrwarns}\`**`)
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-user-warn")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    let cruwarns = message.content.split(" ").slice(1).join(" ")
    if (!cruwarns) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmuwarn_${message.author.id}_${message.guild.id}`, { cmuwarn: cruwarns })
    message.channel.send(`**${prefix}\`user-warn\` => ${prefix}\`${cruwarns}\`**`)
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-question")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`

      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }

    let question = message.content.split(" ").slice(1).join(" ")
    if (!question) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmquestion_${message.author.id}_${message.guild.id}`, { cmquestion: question })
    message.channel.send(`**${prefix}\`question\` => ${prefix}\`${question}\`**`)
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-flag")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }

    let flag = message.content.split(" ").slice(1).join(" ")
    if (!flag) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmflag_${message.author.id}_${message.guild.id}`, { cmflag: flag })
    message.channel.send(`**${prefix}\`flag\` => ${prefix}\`${flag}\`**`)
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-lock")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }

    let lock = message.content.split(" ").slice(1).join(" ")
    if (!lock) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmlock_${message.author.id}_${message.guild.id}`, { cmlock: lock })
    message.channel.send(`**${prefix}\`lock\` => ${prefix}\`${lock}\`**`)
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-unlock")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }

    let unlock = message.content.split(" ").slice(1).join(" ")
    if (!unlock) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmunlock_${message.author.id}_${message.guild.id}`, { cmunlock: unlock })
    message.channel.send(`**${prefix}\`unlock\` => ${prefix}\`${unlock}\`**`)
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-mute")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    let mute = message.content.split(" ").slice(1).join(" ")
    if (!mute) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmmute_${message.author.id}_${message.guild.id}`, { cmmute: mute })
    message.channel.send(`**${prefix}\`mute\` => ${prefix}\`${mute}\`**`)
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-unmute")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }

    let unmute = message.content.split(" ").slice(1).join(" ")
    if (!unmute) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmunmute_${message.author.id}_${message.guild.id}`, { cmunmute: unmute })
    message.channel.send(`**${prefix}\`unmute\` => ${prefix}\`${unmute}\`**`)
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-lang.ar")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }

    let langar = message.content.split(" ").slice(1).join(" ")
    if (!langar) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmlangar_${message.author.id}_${message.guild.id}`, { cmlangar: langar })
    message.channel.send(`**${prefix}\`lang-ar\` => ${prefix}\`${langar}\`**`)
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-lang.en")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    let langen = message.content.split(" ").slice(1).join(" ")
    if (!langen) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر")
    }
    db.set(`cmlangen_${message.author.id}_${message.guild.id}`, { cmlangen: langen })
    message.channel.send(`**${prefix}\`lang-en\` => ${prefix}\`${langen}\`**`)
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-ping")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }

    let ping = message.content.split(" ").slice(1).join(" ")
    if (!ping) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmping_${message.author.id}_${message.guild.id}`, { cmping: ping })
    message.channel.send(`**${prefix}\`ping\` => ${prefix}\`${ping}\`**`)
  }
}
})




client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-swearing-bot-on")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }

    let swearon = message.content.split(" ").slice(1).join(" ")
    if (!swearon) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmswearon_${message.author.id}_${message.guild.id}`, { cmswearon: swearon })
    message.channel.send(`**${prefix}\`swearing-bot-on\` => ${prefix}\`${swearon}\`**`)
  }
}
})







client.on("message", message => {
  if (message.content.startsWith(prefix + "set-command-swearing-bot-off")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }

    let swearoff = message.content.split(" ").slice(1).join(" ")
    if (!swearoff) {
      if (lang === "en") return message.channel.send("type new command")
      if (lang === "ar") return message.channel.send("اكتب الامر الجديد")
    }
    db.set(`cmswearoff_${message.author.id}_${message.guild.id}`, { cmswearoff: swearoff })
    message.channel.send(`**${prefix}\`swearing-bot-off\` => ${prefix}\`${swearoff}\`**`)
  }
}
})









client.on("message", message => {
  if (message.content.startsWith(prefix + "set-commands")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    let embeden = new Discord.MessageEmbed()
      .setTitle(`**command**`)
      .setTimestamp()
      .setThumbnail()
      .setColor(`RANDOM`)
      .setDescription(`**
   ${prefix}\`set-command-lang.ar\`
   ${prefix}\`set-command-lang.en\`
   ${prefix}\`set-command-level\`
   ${prefix}\`set-command-rome-level\`
   ${prefix}\`set-command-help\`
   ${prefix}\`set-command-credit\`
   ${prefix}\`set-command-daily\`
   ${prefix}\`set-command-trans\`
   ${prefix}\`set-command-warn\`
   ${prefix}\`set-command-remove-warn\`
   ${prefix}\`set-command-user-warn\`
   ${prefix}\`set-command-question\`
   ${prefix}\`set-command-flag\`
   ${prefix}\`set-command-lock\`
   ${prefix}\`set-command-unlock\`
   ${prefix}\`set-command-mute\`
   ${prefix}\`set-command-unmute\`
   ${prefix}\`set-command-ping\`
   ${prefix}\`set-command-swearing-bot-off\`
   ${prefix}\`set-command-swearing-bot-on\`
   **`)
    let embedar = new Discord.MessageEmbed()
      .setTitle(`**الاوامر**`)
      .setTimestamp()
      .setThumbnail()
      .setColor(`RANDOM`)
      .setDescription(`**
  ${prefix}\`set-command-lang.ar\`
  ${prefix}\`set-command-lang.en\`
  ${prefix}\`set-command-level\`
  ${prefix}\`set-command-rome-level\`
  ${prefix}\`set-command-help\`
  ${prefix}\`set-command-credit\`
  ${prefix}\`set-command-daily\`
  ${prefix}\`set-command-trans\`
  ${prefix}\`set-command-warn\`
  ${prefix}\`set-command-remove-warn\`
  ${prefix}\`set-command-user-warn\`
  ${prefix}\`set-command-question\`
  ${prefix}\`set-command-flag\`
  ${prefix}\`set-command-lock\`
  ${prefix}\`set-command-unlock\`
  ${prefix}\`set-command-mute\`
  ${prefix}\`set-command-unmute\`
  ${prefix}\`set-command-ping\`
  ${prefix}\`set-command-swearing-bot-off\`
   ${prefix}\`set-command-swearing-bot-on\`
  **`)
    if (lang === "en") return message.channel.send(embeden)
    if (lang === "ar") return message.channel.send(embedar)

  }
}
})

client.on("message", (message) => {
  if (message.author.bot || !message.guild) return;

  if (!db.get(`xp_${message.author.id}_${message.guild.id}`))
    db.set(`xp_${message.author.id}_${message.guild.id}`, { xp: 1 })
  db.add(`xp_${message.author.id}_${message.guild.id}.xp`, 1);
  if (!db.get(`level_${message.author.id}_${message.guild.id}`))
    db.set(`level_${message.author.id}_${message.guild.id}`, { level: 1 })
  if (db.get(`xp_${message.author.id}_${message.guild.id}`).xp > 100) {
    let rom = db.get(`channel_${message.author.id}_${message.guild.id}`)
    let levelo = client.channels.cache.get(rom)
    let levelx = db.add(`level_${message.author.id}_${message.guild.id}.level`, 1)
    db.delete(`xp_${message.author.id}_${message.guild.id}.xp`, 100)
    if (!levelo) {
      return;
      //owner.send(`**hi owner you need type \`${prefix}set-level-rome\`**`)
    }
    levelo.send(`**
    <@${message.author.id}> you level new \`${levelx.level}\`
**`).catch(error => console.log('erorr'))
  }
}) 
client.on("message", message => {

  //(`cmlangar_${message.author.id}_${message.guild.id}`,{cmlangar : langar})
  let command = db.get(`cmlangar_${message.author.id}_${message.guild.id}.cmlangar`)
  if (message.content.startsWith(prefix + "set-lang-ar") ||
    message.content.startsWith(prefix + command)) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    db.set(`lun_${message.guild.id}`, { lang: "ar" })
    message.channel.send(`تم`)
  }
}
})
client.on("message", message => {
  let command = db.get(`cmlangen_${message.author.id}_${message.guild.id}.cmlangen`)
  if (message.content.startsWith(prefix + "set-lang-en") ||
    message.content.startsWith(prefix + command)) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    db.set(`lun_${message.guild.id}`, { lang: "en" })
    message.channel.send(`done`)
  }
}
})


client.on("message", message => {
  let command = db.get(`cmping_${message.author.id}_${message.guild.id}.cmping`)
  if (message.content.startsWith(prefix + command) ||
    message.content.startsWith(prefix + "ping")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }

    if (lang === "en") return message.channel.send(new Discord.MessageEmbed()
      .setDescription(`**
                 my ping is
\`\`\`[${client.ws.ping}]\`\`\`**`)
      .setColor("RANDOM")

    )

    if (lang === "ar") return message.channel.send(new Discord.MessageEmbed()
      .setDescription(`**
                  سرعه اتصالي هي
\`\`\`[${client.ws.ping}]\`\`\`**`)
      .setColor("RANDOM")
    )


  }
}
})





client.on("message", message => {
  let command = db.get(`cmcredit_${message.author.id}_${message.guild.id}.cmcredit`)
  if (message.content.startsWith(prefix + command) ||
    message.content.startsWith(prefix + "credit")) {

    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    let args = message.content.substring(prefix.length).split(" ");

    const user = message.mentions.users.first()
    if (!user && !args[1]) {
      if (db.get(`sccredit_${message.author.id}`) === null)
        db.set(`sccredit_${message.author.id}`, { credit: 0 })
      let credit = db.get(`sccredit_${message.author.id}.credit`)
      if (credit === null) credit = 0;
      let embeden = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTimestamp()
        .setThumbnail()
        .setDescription(`you have is \`${credit}\``)
      let embedar = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTimestamp()
        .setThumbnail()
        .setDescription(`انت لديك \`${credit}\``)
      if (lang === "en") return message.channel.send(embeden)
      if (lang === "ar") return message.channel.send(embedar)
    }
    if (user) {
      if (user.bot) {
        if (lang === "en") return message.channel.send("don't have credit  bots | ❌");
        if (lang === "ar") return message.channel.send("البوتات ليست لديها كردت | ❌");
      }
      if (db.get(`sccredit_${user.id}`) === null);
      let creditu =
        db.get(`sccredit_${user.id}.credit`)
      if (creditu === null) creditu = 0;
      let embeden = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTimestamp()
        .setThumbnail()
        .setDescription(`<@${user.id}> have is \`${creditu}\``)
      let embedar = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTimestamp()
        .setThumbnail()
        .setDescription(`<@${user.id}> لديه \`${creditu}\``)
      if (lang === "en") message.channel.send(embeden)
      if (lang === "ar") message.channel.send(embedar)
    }

  }
  }
})

client.on("message", message => {
  let command = db.get(`cmdaily_${message.author.id}_${message.guild.id}.cmdaily`)
  if (message.content.startsWith(prefix + command) ||
    message.content.startsWith(prefix + "daily")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    let timeout = 86400000
    let daily = db.fetch(`daily_${message.author.id}`);
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = (timeout - (Date.now() - daily));
      if (lang === "en") message.channel.send(new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setDescription(`**| ${message.author.username}, Please wait 1 day**`))
      if (lang === "ar") message.channel.send(new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setDescription(`**| ${message.author.username}, انتضر يوم **`))
    }
    else {
      let random = Math.floor(Math.random() * (3000 - 6000) + 6000)
      db.add(`sccredit_${message.author.id}.credit`, random)
      db.set(`daily_${message.author.id}`, Date.now())
      if (lang === "en") message.channel.send(new Discord.MessageEmbed()
        .setThumbnail()
        .setTimestamp()
        .setColor("RANDOM")
        .setDescription(` **  ${message.author.username}, you have new ${random}**`))
      if (lang === "ar") message.channel.send(new Discord.MessageEmbed()
        .setThumbnail()
        .setTimestamp()
        .setColor("RANDOM")
        .setDescription(` **  ${message.author.username}, انت لديك الاان ${random}**`))
    }
  }
}
})



client.on("message", message => {
  let command = db.get(`cmtrans_${message.author.id}_${message.guild.id}.cmtrans`)
  if (message.content.startsWith(prefix + command) ||
    message.content.startsWith(prefix + "trans")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    let args = message.content.split(' ').slice(1)
    const user = message.mentions.users.first()
    let number = message.content.split(" ").slice(2).join(" ");
    if (!user) {
      if (lang === "en") return message.channel.send("**mentions user| ❌**");
      if (lang === "ar") return message.channel.send("**منشن الشخص| ❌**");
    }
    if (user.bot) {
      if (lang === "en") return message.channel.send("**don't have credit  bots| ❌**");
      if (lang === "ar") return message.channel.send("**البوتات ليست لديها كردت| ❌**");
    }
    if (user.id === message.author.id) {

      if (lang === "en") return message.channel.send(new Discord.MessageEmbed()
        .setThumbnail()
        .setTimestamp()
        .setColor("RANDOM")
        .setDescription(`❌ ** | ${message.author.username}, you can't transfer money to your self!**`))

      if (lang === "ar") return message.channel.send(new Discord.MessageEmbed()
        .setThumbnail()
        .setTimestamp()
        .setColor("RANDOM")
        .setDescription(`❌ ** | ${message.author.username}, لا* تستطيع تحويل على نفسك*`))
    }
    if (!number) {
      if (lang == "en") return message.channel.send("**type number| ❌**");
      if (lang == "ar") return message.channel.send("**اكتب رقم| ❌**");
    }

    let member = db.fetch(`sccredit_${message.author.id}.credit`)

    if (member < args[1]) {
      if (lang === "en") return message.channel.send(`
you don't have 
\`\`\`css
${number}
\`\`\`

`)
      if (lang === "ar") return message.channel.send(`
انت ليست لديك
\`\`\`css
${number}
\`\`\`
`)
    }

    db.add(`sccredit_${user.id}.credit`, number)
    db.subtract(`sccredit_${message.author.id}.credit`, number)
    let embeden = new Discord.MessageEmbed()
      .setTitle(`**done transfer**`)
      .setTimestamp()
      .setThumbnail()
      .setColor(`RANDOM`)
      .addField(`** you ransfer \`${number}\` to**`, `<@${user.id}>`)
    let embedar = new Discord.MessageEmbed()
      .setTitle(`**تم تحويل **`)
      .setTimestamp()
      .setThumbnail()
      .setColor(`RANDOM`)
      .addField(`** انت حولت \`${number}\` 
    الى**`, `<@${user.id}>`)
    if (lang === "en") return message.channel.send(embeden)
    if (lang === "ar") return message.channel.send(embedar)
  }
  }
})













client.on("message", message => {
  let command = db.get(`cmwarn_${message.author.id}_${message.guild.id}.cmwarn`)
  if (message.content.startsWith(prefix + command) ||
    message.content.startsWith(prefix + "warn")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      if (lang === "en") return message.reply("you don't have  permissions!");
      if (lang === "ar") return message.reply("ليست لديك صلاحيات!");
    }
    const args = message.content.slice(prefix).trim().split(' ');
    const user = message.mentions.members.first();
    let reason = args.slice(2).join("  ")
    if (!user) {
      if (lang === "en") return message.channel.send(" mentions user | ❌");
      if (lang === "ar") return message.channel.send(" منشن الشخص  | ❌");
    }
    if (!reason) {
      if (lang === "en") return message.channel.send(" Write a warning reason | ❌");
      if (lang === "ar") return message.channel.send(" اذكر السبب | ❌");
    }
    if (user.bot) {
      if (lang == "en") return message.channel.send("Can't warn bots | ❌");
      if (lang == "ar") return message.channel.send("لا تستطيع تحذير بوتات | ❌");
    }
    if (reason) {
      db.set(`screason_${message.guild.id}_${user.id}`, reason)
    }
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);
    if (warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1);
      if (lang === "en") message.channel.send(new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`**done warn **`)
        .addField(`**name**:`, `${user}`)
        .addField(`**reason**:`, `${reason}`)
      )
      if (lang === "ar") message.channel.send(new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`**تم تحذير**`)
        .addField(`**الاسم**:`, `${user}`)
        .addField(`**السبب**:`, `${reason}`)
      )
    } else if (warnings !== null) {
      db.add(`warnings_${message.guild.id}_${user.id}`, 1);
      if (lang === "en") message.channel.send(new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`**done warn **`)
        .addField(`**name**:`, `${user}`)
        .addField(`**reason**:`, `${reason}`)
      )
      if (lang === "ar") message.channel.send(new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`**تم تحذير**`)
        .addField(`**الاسم**:`, `${user}`)
        .addField(`**السبب**:`, `${reason}`)
      )

    }
  }
  }
})

client.on("message", message => {
  let command = db.get(`cmrwarn_${message.author.id}_${message.guild.id}.cmrwarn`)
  if (message.content.startsWith(prefix + command) ||
    message.content.startsWith(prefix + "remove-warn")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      if (lang === "en") return message.reply("you don't have  permissions!");
      if (lang === "ar") return message.reply("ليست لديك صلاحيات!");
    }

    const user = message.mentions.members.first();
    if (!user) {
      if (lang === "en") return message.channel.send(" mentions user | ❌");
      if (lang === "ar") return message.channel.send(" منشن الشخص  | ❌");
    }
    if (user.bot) {
      if (lang == "en") return message.channel.send("Can't warn bots | ❌");
      if (lang == "ar") return message.channel.send("لا تستطيع تحذير بوتات | ❌");
    }
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);
    if (warnings === null) {
      if (lang == "en") return message.channel.send(`It has no warning | ❌`);
      if (lang == "ar") return message.channel.send(`لا يملك اي تحذير | ❌`);
    } else if (warnings !== null) {
      db.delete(`warnings_${message.guild.id}_${user.id}`);
      if (lang == "en") return message.channel.send(new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`**done remove warn **`)
        .addField(`**name**:`, `${user}`)
      )
      if (lang == "ar") return message.channel.send(new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`**تم ازاله تحذير **`)
        .addField(`**الاسم**:`, `${user}`)
      )
    }

  }
}
})


client.on("message", message => {
  let command = db.get(`cmuwarn_${message.author.id}_${message.guild.id}.cmuwarn`)
  if (message.content.startsWith(prefix + command) ||
    message.content.startsWith(prefix + "user-warn")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      if (lang === "en") return message.reply("you don't have  permissions!");
      if (lang === "ar") return message.reply("ليست لديك صلاحيات!");
    }
    const user = message.mentions.members.first();
    if (!user) {
      if (lang === "en") return message.channel.send(" mentions user | ❌");
      if (lang === "ar") return message.channel.send(" منشن الشخص | ❌");
    }
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);
    if (warnings === null) {
      if (lang === "en") return message.channel.send(`**<@${user.id}> not have warn**`)
      if (lang === "ar") return message.channel.send(`**<@${user.id}> 
 ليست لديه تحذيرات**`)
    }
    if (lang === "en") message.channel.send(`${user}  have [${warnings}] warn`);
    if (lang === "ar") message.channel.send(`${user}  لديه [${warnings}] تحذيرات`);
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "black-add")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    if (message.author.id !== owner) {
      if (lang === "en") return message.channel.send(`**you don't owner**`)
      if (lang === "ar") return message.channel.send(`**انت لست الاونر**`)
    }
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server only commands")
    let user = message.mentions.users.first()
    let res = message.content.split(" ").slice(2).join(" ");

    if (!user) {
      if (lang === "en") return message.channel.send(`**mentions user**`)
      if (lang === "ar") return message.channel.send(`**منشن الشخص**`)
    }
    if (user.bot) {
      if (lang === "en") return message.channel.send(`**you can't add \`bot\`**`)
      if (lang === "ar") return message.channel.send(`**لا تستطيع اذافه
       \`بوتات\`**`)
    }
    if (user.id === message.author.id) {
      if (lang === "en") return message.channel.send(`**you can't add \`your self!\`**`)
      if (lang === "ar") return message.channel.send(`**لا تستطيع اضافه 
       \`نفسك!\`**`)
    }
    let blacklist = db.get(`sccblack_${user.id}`)
    if (blacklist) {
      if (lang === "en") return message.channel.send(`**I added <@${user.id}> before**`)
      if (lang === "ar") return message.channel.send(`**لقد اضفت <@${user.id}> من قبل**`)
    }
    if (!res) {
      if (lang === "en") return message.channel.send(`**type reason**`)
      if (lang === "ar") return message.channel.send(`**اكتب السبب**`)
    }
    db.set(`sccblack_${user.id}`, { reason: res })
    let embeden = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`blacklist`)
      .addField(`**you add blacklist **`, `<@${user.id}>`)
      .addField(`**reason**`, `${res}`)
      .addField(`from server`, `${message.guild.name}`)
      .setTimestamp()
      .setThumbnail()
    let embedar = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`قاىْمه سوداء`)
      .addField(`**انت اضفت  **`, `<@${user.id}>`)
      .addField(`**السبب**`, `${res}`)
      .addField(`السيرفر`, `${message.guild.name}`)
      .setTimestamp()
      .setThumbnail()

    if (lang === "en") message.channel.send(embeden)
    if (lang === "ar") message.channel.send(embedar)
  }
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "black-user")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
    type ${prefix}\`set-lang-ar\`
    or
    type ${prefix}\`set-lang-en\`
    **`)
    }

    if (message.author.id !== owner) {
      if (lang === "en") return message.channel.send(`**you don't owner**`)
      if (lang === "ar") return message.channel.send(`**انت لست الاونر**`)
    }
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server only commands")
    let user = message.mentions.users.first()
    if (!user) {
      if (lang === "en") return message.channel.send(`**mentions user**`)
      if (lang === "ar") return message.channel.send(`**منشن الشخص**`)
    }
    if (user.bot) {
      if (lang === "en") return message.channel.send(`**bot don't have \`bliacklist\`**`)
      if (lang === "ar") return message.channel.send(`**بوت ليست في
   \`قاىْمه سوداء\`**`)
    }
    let blacklist = db.get(`sccblack_${user.id}.reason`)
    if (!blacklist) {
      if (lang === "en") return message.channel.send(`**
 <@${user.id}> don't  have blacklist
 **`)
      if (lang === "ar") return message.channel.send(`**
 <@${user.id}> ليس في قاىْمه سوداء
 **`)
    } else {
      let embeden = new Discord.MessageEmbed()
        .setTitle(`blacklist`)
        .setThumbnail()
        .setTimestamp()
        .setColor(`RANDOM`)
        .addField(`**name**`, `<@${user.id}>`)
        .addField(`**reason**`, `${blacklist}`)
      let embedar = new Discord.MessageEmbed()
        .setTitle(`blacklist`)
        .setThumbnail()
        .setTimestamp()
        .setColor(`RANDOM`)
        .addField(`**الاسم**`, `<@${user.id}>`)
        .addField(`**السبب**`, `${blacklist}`)
      if (lang === "ar") message.channel.send(embedar)
      if (lang === "en") message.channel.send(embeden)
    }
  }
  }
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "black-remove")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
    type ${prefix}\`set-lang-ar\`
    or
    type ${prefix}\`set-lang-en\`
    **`)
    }

    if (message.author.id !== owner) {
      if (lang === "en") return message.channel.send(`**you don't owner**`)
      if (lang === "ar") return message.channel.send(`**انت لست الاونر**`)
    }
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server only commands")
    let user = message.mentions.users.first()
    if (!user) {
      if (lang === "en") return message.channel.send(`**mentions user**`)
      if (lang === "ar") return message.channel.send(`**منشن الشخص**`)
    }
    if (user.bot) {
      if (lang === "en") return message.channel.send(`**you can't remove \`bot\`**`)
      if (lang === "ar") return message.channel.send(`**لا يمكنك ازاله
     \`بوت\`**`)
    }
    if (user.id === message.author.id) {
      if (lang === "en") return message.channel.send(`**you can't remove \`your self!\`**`)
      if (lang === "ar") return message.channel.send(`**لا يمكن ازاله \`نفسك!\`**`)
    }
    let blacklist = db.get(`sccblack_${user.id}.reason`)
    if (!blacklist) {
      if (lang === "en") return message.channel.send(`**
  <@${user.id}> don't  have blacklist
  **`)
      if (lang === "ar") return message.channel.send(`**
  <@${user.id}> ليس في قاىْ/ه سوداء
  **`)
    }
    else {
      db.delete(`sccblack_${user.id}.`)
      if (lang === "en") message.channel.send(`done`)
      if (lang === "ar") message.channel.send(`تم`)
    }
  }
  }
})


const pla = [
  "بغداد",
  "العراق",
  "احمر",
  "ليجين",
  "176"
]
const sa = [
  "ما هي عاصمه العراق",
  "ماهي دوله حاربت ايران",
  "ما هو لون تفاح",
  "من هو افضل مبرمج",
  "88+88"
]
const ple = [
  "baghdad",
  "iraq",
  "red",
  "lejen",
  "176"
]
const se = [
  "What is the capital of Iraq?",
  "What country fought Iran?",
  "What color is an apple?",
  "Who is the best programmer?",
  "88+88"
]
client.on("message", async (message) => {
  let command = db.get(`cmquestion_${message.author.id}_${message.guild.id}.cmquestion`)
  if (message.content.startsWith(prefix + command) ||
    message.content.startsWith(prefix + "question")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }

    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    var randome = Math.floor(Math.random() * ple.length);
    var randoma = Math.floor(Math.random() * pla.length);
    var captchaen = new Discord.MessageEmbed()
      .setColor("YELLOW")

      .setDescription("**You Have 15s To type  **" + `\`${se[randome]}\``);
    var captchaar = new Discord.MessageEmbed()
      .setColor("YELLOW")

      .setDescription(`**لديه 15 ثانيه لكتابه** \`${sa[randoma]}\``);
    if (lang === "en") return message.channel.send(captchaen).then(() => {
      var ren = message.channel.awaitMessages(msg => msg.content == ple[randome], {
        max: 1,
        time: 15 * 1000,
        errors: ["time"]
      });
      ren.catch(async (bmsg) => {
        await bmsg.delete(1)
        message.channel.send(
          new Discord.MessageEmbed()
            .setDescription(`❌ **end time
        The answer was [${ple[randome]}]**`)
            .setColor("RED")
        )
      })
      ren.then(async (collected) => {
        await collected.delete(1)
        message.channel.send(new Discord.MessageEmbed()
          .setColor("GREEN")
          .setDescription(`**<@${message.author.id}>
  you won **`))
      })
    })
    if (lang === "ar") return message.channel.send(captchaar).then(() => {
      var rar = message.channel.awaitMessages(msg => msg.content == pla[randoma], {
        max: 1,
        time: 15 * 1000,
        errors: ["time"]
      });
      rar.catch(async (bmsg) => {
        await bmsg.delete(1)
        message.channel.send(
          new Discord.MessageEmbed()
            .setDescription(`**❌ انتهى الوقت
            الاجابه كانت
[${pla[randoma]}] **`)
            .setColor("RED")
        )
      })
      rar.then(async (collected) => {
        await collected.delete(1)
        message.channel.send(new Discord.MessageEmbed()
          .setColor("GREEN")
          .setDescription(`**<@${message.author.id}>
      لقد ربحت **`))
      })
    })
  }
  }
})

const flage = [
  "iraq",
  "argentina",
  "united State",
  "spain",
  "brazil",
  "egypt",
  "comoros"
]

const flag = [
  "العراق",
  "الارجنتين",
  "الولايات المتحدة",
  "اسبانيا",
  "البرازيل",
  "مصر",
  "جزر القمر"
]
const flagf = [
  "https://cdn.discordapp.com/attachments/963156009663209482/963156019029090345/unknown.png",
  "https://cdn.discordapp.com/attachments/963156009663209482/963160688086376448/unknown.png",
  "https://cdn.discordapp.com/attachments/963156009663209482/963161117557948426/unknown.png",
  "https://cdn.discordapp.com/attachments/963156009663209482/963161862973825044/unknown.png",
  "https://cdn.discordapp.com/attachments/963156009663209482/963162107535323186/unknown.png",
  "https://cdn.discordapp.com/attachments/963156009663209482/963162574713675846/unknown.png",
  "https://cdn.discordapp.com/attachments/963156009663209482/963162932760436736/unknown.png"
]
client.on("message", async (message) => {
  let command = db.get(`cmflag_${message.author.id}_${message.guild.id}.cmflag`)
  if (message.content.startsWith(prefix + command) ||
    message.content.startsWith(prefix + "flag")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
       type ${prefix}\`set-lang-ar\`
       or
       type ${prefix}\`set-lang-en\`
       **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
        \`قاىْمه سوداء\`**`)
    }

    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    var random = Math.floor(Math.random() * flagf.length);
    var captchaen = new Discord.MessageEmbed()
      .setColor("YELLOW")
      .setImage(`${flagf[random]}`, true)
      .setDescription("**You have 15 seconds to guess a name**");
    var captchaar = new Discord.MessageEmbed()
      .setColor("YELLOW")
      .setImage(`${flagf[random]}`, true)
      .setDescription(`**لديك 15 ثانيه لحزر اسم** `);
    if (lang === "en") return message.channel.send(captchaen).then(() => {
      var ren = message.channel.awaitMessages(msg => msg.content == flage[random], {
        max: 1,
        time: 15 * 1000,
        errors: ["time"]
      });
      ren.catch(async (bmsg) => {
        await bmsg.delete(1)
        message.channel.send(
          new Discord.MessageEmbed()
            .setDescription(`❌ **end time
         The answer was [${flage[random]}]**`)
            .setColor("RED")
        )
      })
      ren.then(async (collected) => {
        await collected.delete(1)
        message.channel.send(new Discord.MessageEmbed()
          .setColor("GREEN")
          .setDescription(`**<@${messgae.author.id}>
   you won **`))
      })
    })
    if (lang === "ar") return message.channel.send(captchaar).then(() => {
      var rar = message.channel.awaitMessages(msg => msg.content == flag[random], {
        max: 1,
        time: 15 * 1000,
        errors: ["time"]
      });
      rar.catch(async (bmsg) => {
        await bmsg.delete(1)
        message.channel.send(
          new Discord.MessageEmbed()
            .setDescription(`**❌ انتهى الوقت
              الاجابه كانت
[${flag[random]}] **`)
            .setColor("RED")
        )
      })
      rar.then(async (collected) => {
        await collected.delete(1)
        message.channel.send(new Discord.MessageEmbed()
          .setColor("GREEN")
          .setDescription(`**<@${message.author.id}>
    لقد ربحت **`))
      })
    })
  }
}
})









client.on("message", message => {
  let command = db.get(`cmlock_${message.author.id}_${message.guild.id}.cmlock`)
  if (message.content.startsWith(prefix + command) ||
    message.content.startsWith(prefix + "lock")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
       type ${prefix}\`set-lang-ar\`
       or
       type ${prefix}\`set-lang-en\`
       **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
        \`قاىْمه سوداء\`**`)
    }
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      if (lang === "en") return message.reply("you don't have  permissions!");
      if (lang === "ar") return message.reply("ليست لديك صلاحيات!");
    }
    let everyone = message.guild.roles.cache.find(m => m.name === '@everyone');
    let args = message.content.substring(prefix.length).split(" ");

    const channel = message.mentions.channels.first()
    if (!channel && !args[1]) {
      message.channel.createOverwrite(everyone, {
        SEND_MESSAGES: false,
      })
      if (lang === "ar") message.channel.send("** تم قفل الروم** ");
      if (lang === "en") message.channel.send("**done lock channel**");
    }
    if (channel) {
      channel.createOverwrite(everyone, {
        SEND_MESSAGES: false,
      })
      if (lang === "ar") message.channel.send(`**
تم قفل روم
<#${channel.id}>
**`)
      if (lang === "en") message.channel.send(`**
done lock channel
<#${channel.id}>
**`);
    }
  }
  }
})


client.on("message", message => {
  let command = db.get(`cmunlock_${message.author.id}_${message.guild.id}.cmunlock`)
  if (message.content.startsWith(prefix + command) ||
    message.content.startsWith(prefix + "unlock")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
       type ${prefix}\`set-lang-ar\`
       or
       type ${prefix}\`set-lang-en\`
       **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
        \`قاىْمه سوداء\`**`)
    }
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      if (lang === "en") return message.reply("you don't have  permissions!");
      if (lang === "ar") return message.reply("ليست لديك صلاحيات!");
    }
    let everyone = message.guild.roles.cache.find(m => m.name === '@everyone');
    let args = message.content.substring(prefix.length).split(" ");

    const channel = message.mentions.channels.first()
    if (!channel && !args[1]) {
      message.channel.createOverwrite(everyone, {
        SEND_MESSAGES: true,
      })
      if (lang === "ar") message.channel.send("** تم فتح الروم** ");
      if (lang === "en") message.channel.send("**done unlock channel**");
    }
    if (channel) {
      channel.createOverwrite(everyone, {
        SEND_MESSAGES: true,
      })
      if (lang === "ar") message.channel.send(`**
تم فتح روم
<#${channel.id}>
**`)
      if (lang === "en") message.channel.send(`**
done unlock channel
<#${channel.id}>
**`);
    }
  }
  }
})


client.on("message", message => {
  let command = db.get(`cmmute_${message.author.id}_${message.guild.id}.cmmute`)
  if (message.content.startsWith(prefix + command) ||
    message.content.startsWith(prefix + "mute")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    if (!message.member.hasPermission("MUTE_MEMBERS")) {
      if (lang === "en") return message.reply("you don't have  permissions!");
      if (lang === "ar") return message.reply("ليست لديك صلاحيات!");
    }
    let user = message.mentions.members.first();
    let role = message.guild.roles.cache.find(ro => ro.name == 'mute');
    if (!role) {
      message.guild.roles.create({
        data: {
          name: 'mute',
          permissions: [],
          color: 'random'
        }
      })
    }
    if (!user) {
      if (lang === "en") return message.channel.send(`**mentions user**`)
      if (lang === "ar") return message.channel.send(`**منشن الشخص**`)
    }
    message.guild.channels.cache.forEach(c => {
      c.updateOverwrite(role, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    user.roles.add(role)
    if (lang === "en") return message.channel.send(`**✅ - Successfully Muted ${user.user.tag}**`)
    if (lang === "ar") return message.channel.send(`**✅ - تم اسكات
         ${user.user.tag}**`)
  }
}
})

client.on("message", message => {
  let command = db.get(`cmunmute_${message.author.id}_${message.guild.id}.cmunmute`)
  if (message.content.startsWith(prefix + command) ||
    message.content.startsWith(prefix + "unmute")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    if (!message.member.hasPermission("MUTE_MEMBERS")) {
      if (lang === "en") return message.reply("you don't have  permissions!");
      if (lang === "ar") return message.reply("ليست لديك صلاحيات!");
    }
    let user = message.mentions.members.first();
    let role = message.guild.roles.cache.find(ro => ro.name == 'mute');
    if (!role) {
      message.guild.roles.create({
        data: {
          name: 'mute',
          permissions: [],
          color: 'random'
        }
      })
    }
    if (!user) {
      if (lang === "en") return message.channel.send(`**mentions user**`)
      if (lang === "ar") return message.channel.send(`**منشن الشخص**`)
    }
    message.guild.channels.cache.forEach(c => {
      c.updateOverwrite(role, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    user.roles.remove(role)
    if (lang === "en") return message.channel.send(`**✅ - Successfully unwarn ${user.user.tag}**`)
    if (lang === "ar") return message.channel.send(`**✅ - تم الغاx اسكات
         ${user.user.tag}**`)
  }
}
})

client.on("message", message => {
  if (message.content.startsWith(prefix + "delete-command")) {
    if (message.author.bot || message.channel.type == "dm") return message.reply("Server commands ")
    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      if (spne) {

        message.reply(`**انت غالط على بوت ,_,**`)
      }
    }
    else {
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    let blacklist = db.get(`sccblack_${message.author.id}.reason`)
    if (blacklist) {
      if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
      if (lang === "ar") return message.reply(`** انت في
       \`قاىْمه سوداء\`**`)
    }
    let args = message.content.substring(prefix.length).split(" ");
    let help = db.get(`cmhelp_${message.author.id}_${message.guild.id}.cmhelp`)
    let warn = db.get(`cmwarn_${message.author.id}_${message.guild.id}.cmwarn`)
    let level = db.get(`getcmlevel_${message.author.id}_${message.guild.id}.cmlevel`)
    let romelevel = db.get(`cmrlevel_${message.author.id}_${message.guild.id}.cmrlevel`)
    let credit = db.get (`cmcredit_${message.author.id}_${message.guild.id}.cmcredit`)
    let daily = db.get(`cmdaily_${message.author.id}_${message.guild.id}.cmdaily`)
    let trans = db.get(`cmtrans_${message.author.id}_${message.guild.id}.cmtrans`)
    let unwarn = db.get(`cmrwarn_${message.author.id}_${message.guild.id}.cmrwarn`)
    let userwarn = db.get(`cmuwarn_${message.author.id}_${message.guild.id}.cmuwarn`)
    let question = db.get(`cmquestion_${message.author.id}_${message.guild.id}.cmquestion`)
    let flag = db.get(`cmflag_${message.author.id}_${message.guild.id}.cmflag`)
    let lock = db.get(`cmlock_${message.author.id}_${message.guild.id}.cmlock`)
    let unlock = db.get(`cmunlock_${message.author.id}_${message.guild.id}.cmunlock`)
    let mute= db.get(`cmmute_${message.author.id}_${message.guild.id}.cmmute`)
    let unmute= db.get(`cmunmute_${message.author.id}_${message.guild.id}.cmunmute`)
    let langar = db.get(`cmlangar_${message.author.id}_${message.guild.id}.cmlangar`)
    let langen = db.get(`cmlangen_${message.author.id}_${message.guild.id}.cmlangen`)
    let ping = db.get(`cmping_${message.author.id}_${message.guild.id}.cmping`)
    let swearing_bot_off = db.get(`cmswearoff_${message.author.id}_${message.guild.id}.cmswearoff`)
    let swearing_bot_on = db.get(`cmswearon_${message.author.id}_${message.guild.id}.cmswearon`)
    if (args[1] === 'help') {
      if (help === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }

      db.delete(`cmhelp_${message.author.id}_${message.guild.id}`, { cmhelp: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'credit') {
      if (credit === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmcredit_${message.author.id}_${message.guild.id}`, { cmcredit: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'warn') {
      if (warn === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmwarn_${message.author.id}_${message.guild.id}`, { cmwarn: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'ping') {
      if (ping === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmping_${message.author.id}_${message.guild.id}`, { cmping: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'daily') {
      if (daily === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmdaily_${message.author.id}_${message.guild.id}`, { cmdaily: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'trans') {
      if (trans === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmtrans_${message.author.id}_${message.guild.id}`, { cmtrans: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'unwarn') {
      if (unwarn === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmrwarn_${message.author.id}_${message.guild.id}`, { cmrwarn: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'userwarn') {
      if (userwarn === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmuwarn_${message.author.id}_${message.guild.id}`, { cmuwarn: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'question') {
      if (question === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmquestion_${message.author.id}_${message.guild.id}`, { cmquestion: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'flag') {
      if (flag === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmflag_${message.author.id}_${message.guild.id}`, { cmflag: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'lock') {
      if (lock === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmlock_${message.author.id}_${message.guild.id}`, { cmlock: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'unlock') {
      if (unlock === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmunlock_${message.author.id}_${message.guild.id}`, { cmunlock: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'mute') {
      if (mute === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmmute_${message.author.id}_${message.guild.id}`, { cmmute: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'unmute') {
      if (unmute === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmunmute_${message.author.id}_${message.guild.id}`, { cmunmute: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'romelevel') {
      if (romelevel === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmrlevel_${message.author.id}_${message.guild.id}`, { cmrlevel: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'level') {
      if (level === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmlevel_${message.author.id}_${message.guild.id}`, { cmlevel: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'langar') {
      if (langar === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmlangar_${message.author.id}_${message.guild.id}`, { cmlangar: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'swearing-bot-off') {
      if (swearing_bot_off === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmswearoff_${message.author.id}_${message.guild.id}`,{cmswearoff : null})
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }



  if (args[1] === 'swearing-bot-on') {
      if (swearing_bot_on === null|| undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmswearon_${message.author.id}_${message.guild.id}`, {cmswearon : null})
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    if (args[1] === 'langen') {
      if (langen === null || undefined) {
        if (lang === "en") return message.channel.send('**you dont set-command **')
        if (lang === "ar") return message.channel.send('**لم يتم تعين اي امر **')
      }
      db.delete(`cmlangen_${message.author.id}_${message.guild.id}`, { cmlangen: null })
      if (lang === "en") return message.channel.send('**done**')
      if (lang === "ar") return message.channel.send('**تم**')
    }
    
    else {
      let embeden = new Discord.MessageEmbed()
        .setTitle(`**command**`)
        .setTimestamp()
        .setThumbnail()
        .setColor(`RANDOM`)
        .setDescription(`**
   ${prefix}\`delete-command help\`
   ${prefix}\`delete-command warn\`
   ${prefix}\`delete-command unwarn\`
   ${prefix}\`delete-command userwarn\`
   ${prefix}\`delete-command credit\`
   ${prefix}\`delete-command daily\`
   ${prefix}\`delete-command trans\`
   ${prefix}\`delete-command ping\`
   ${prefix}\`delete-command question\`
   ${prefix}\`delete-command flag\`
   ${prefix}\`delete-command lock\`
   ${prefix}\`delete-command unlock\`
   ${prefix}\`delete-command mute\`
   ${prefix}\`delete-command unmute\`
   ${prefix}\`delete-command level\`
   ${prefix}\`delete-command romelevel\`
   ${prefix}\`delete-command langar\`
   ${prefix}\`delete-command langen\`
   ${prefix}\`delete-command swearing-bot-off\`
   ${prefix}\`delete-command swearing-bot-on\`
   **`)
      let embedar = new Discord.MessageEmbed()
        .setTitle(`**الاوامر**`)
        .setTimestamp()
        .setThumbnail()
        .setColor(`RANDOM`)
        .setDescription(`**
  ${prefix}\`delete-command help\`
  ${prefix}\`delete-command warn\`
  ${prefix}\`delete-command unwarn\`
  ${prefix}\`delete-command userwarn\`
  ${prefix}\`delete-command credit\`
  ${prefix}\`delete-command daily\`
  ${prefix}\`delete-command trans\`
  ${prefix}\`delete-command ping\`
  ${prefix}\`delete-command question\`
  ${prefix}\`delete-command flag\`
  ${prefix}\`delete-command lock\`
  ${prefix}\`delete-command unlock\`
  ${prefix}\`delete-command mute\`
  ${prefix}\`delete-command unmute\`
  ${prefix}\`delete-command level\`
  ${prefix}\`delete-command romelevel\`
  ${prefix}\`delete-command langar\`
  ${prefix}\`delete-command langen\`
  ${prefix}\`delete-command swearing-bot-off\`
  ${prefix}\`delete-command swearing-bot-on\`
  **`)
      if (lang === "en") return message.channel.send(embeden)
      if (lang === "ar") return message.channel.send(embedar)
    }
  }
}

})























client.on("message", message => {
  if (message.content.includes("بوت كلب")||
  message.content.includes("بوت حمار")||
  message.content.includes("بوت خرا")||
  message.content.includes("بوت زق")||
  message.content.includes("بوت زك")||
  message.content.includes("بوت غبي")||
  message.content.includes("بوت عبيط")||
  message.content.includes("بوت داعر")||
  message.content.includes("بوت تعيس")){
    let lang = db.get(`lun_${message.guild.id}.lang`);
    if (lang == null || undefined) {
      return message.channel.send(`**
      type ${prefix}\`set-lang-ar\`
      or
      type ${prefix}\`set-lang-en\`
      **`)
    }
    
 let spe = db.get(`spbot_${message.guild.id}.sbbot`)
if(spe === "off"){
  return;
}
else if(spe === "on") {



    let timeout = 10000;
    let spne = db.fetch(`sp_${message.author.id}`);
    if (spne !== null && timeout - (Date.now() - spne) > 0) {
      let time = (timeout - (Date.now() - spne));
    return message.channel.send(new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setDescription(`**| ${message.author.username},  تغلط تاني ,_, **`))
      
     
    }
    
    else {
      message.channel.send(new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setDescription(`**| ${message.author.username}, ليش تغلط **`))
      db.set(`sp_${message.author.id}`, Date.now())
    
}
}
}
})

  client.on("message",message => {
    let command = db.get(`cmswearon_${message.author.id}_${message.guild.id}.cmswearon`)
    if(message.content.startsWith(prefix + "swearing-bot-on")||
    message.content.startsWith(prefix + command)) {
      let lang = db.get(`lun_${message.guild.id}.lang`);
      if (lang == null || undefined) {
        return message.channel.send(`**
        type ${prefix}\`set-lang-ar\`
        or
        type ${prefix}\`set-lang-en\`
        **`)
      }
      let blacklist = db.get(`sccblack_${message.author.id}.reason`)
      if (blacklist) {
        if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
        if (lang === "ar") return message.reply(`** انت في
         \`قاىْمه سوداء\`**`)
      }
      if (!message.member.hasPermission("MUTE_MEMBERS")) {
        if (lang === "en") return message.reply("you don't have  permissions!");
        if (lang === "ar") return message.reply("ليست لديك صلاحيات!");
      }
      db.set(`spbot_${message.guild.id}`,{sbbot : "on"})
      if (lang === "en") return message.channel.send("done") 
      if (lang === "ar") return message.channel.send("تم") 
    }
  })
  client.on("message",message => {
    let command = db.get(`cmswearoff_${message.author.id}_${message.guild.id}.cmswearoff`)
    if(message.content.startsWith(prefix + "swearing-bot-off")||
    message.content.startsWith(prefix + command)) {
      let lang = db.get(`lun_${message.guild.id}.lang`);
      if (lang == null || undefined) {
        return message.channel.send(`**
        type ${prefix}\`set-lang-ar\`
        or
        type ${prefix}\`set-lang-en\`
        **`)
      }
      let blacklist = db.get(`sccblack_${message.author.id}.reason`)
      if (blacklist) {
        if (lang === "en") return message.reply('**You are added in a \`blacklist\`**')
        if (lang === "ar") return message.reply(`** انت في
         \`قاىْمه سوداء\`**`)
      }
      if (!message.member.hasPermission("MUTE_MEMBERS")) {
        if (lang === "en") return message.reply("you don't have  permissions!");
        if (lang === "ar") return message.reply("ليست لديك صلاحيات!");
      } 
      db.set(`spbot_${message.guild.id}`,{sbbot : "off"})
      if (lang === "en") return message.channel.send("done") 
      if (lang === "ar") return message.channel.send("تم") 
    }
  
  })
 