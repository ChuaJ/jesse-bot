const Discord = require('discord.js');
const commands = require('./commands');
const { prefix, token } = require('./constants/config.json');

const client = new Discord.Client();

client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`));

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();
  const task = commands[command];

  if (!task) return;
  
  try{
    task(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('500 Internal bot error with command. Check the logs fam.');
  }
});

client.login(token);
