const fs = require('fs');
const Discord = require('discord.js');

const file = {
  attachment: fs.readFileSync(`${__dirname}/assets/bork.jpg`),
};


const bork = new Discord.RichEmbed({ file })

module.exports = (msg, args) => {
  const target = args[0];

  if (!target) {
    msg.channel.send('Choose a something to bork at: !bork Jesse');
    return;
  }

  msg.channel.send(`Mess with the borko, get the forko ${target}`, bork);
};
