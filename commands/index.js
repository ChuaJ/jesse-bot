const fs = require('fs');
const directories = fs.readdirSync(__dirname);

const commands = {};

for (let i = 0; i < directories.length; i += 1) {
  const dir = directories[i];

  if (dir !== 'index.js') {
    commands[dir] = require(`./${dir}`);
  }
}

module.exports = commands;
