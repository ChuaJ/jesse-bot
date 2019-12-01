const allQuotes = require('./conf/quotes');

module.exports = (msg, args) => {
  const name = args[0];

  if (!name) {
    msg.channel.send('Please specify a quote type or person.');
    return;
  }

  const quotes = allQuotes[name];

  if (!quotes) {
    msg.channel.send('404 Name/type not found in quotes database');
    return;
  }

  const randIdx = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randIdx];
  
  msg.channel.send(quote);
}