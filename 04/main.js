const fs = require('fs');

let lines = fs.readFileSync('./04/input.txt', 'utf-8').split('\n');
const numbers = lines[0].split(',');
lines.shift();
const numOfPlayers = lines.filter(line => line == '').length;
const playerBoards = new Array(numOfPlayers * 5 * 5);

let actualPlayer = -1;
lines.forEach((line, index) => {
  if (line == '') {
    actualPlayer++;
  }
  else {
    playerBoards.push(line.split(' '));
  }
});
