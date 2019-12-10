module.exports = (msg, args) => {
  const msgOptions = { tts: true };
  msg.channel.send(`${msg.author.username} says goodnight friends.`, msgOptions);
};