const { Console } = require('console');
const fs = require('fs');

let lines = fs.readFileSync('./04/input.txt', 'utf-8').split('\n');
const bingoNumbers = lines[0].split(',');
lines.shift();
const numOfPlayers = lines.filter(line => line == '').length;
let playersThatHaveBingo = new Array();
let playerBoards = new Array();

const bingoRow = (player) => {
  for (let i = 0; i < 5; i++) {
    let numOfCorrect = 0;
    for (let x = 0; x < 5; x++) {
      if (playerBoards[(player * 5 * 5) + (i * 5) + x] == -1)
        numOfCorrect++;
    }
    if (numOfCorrect == 5) {
      return player;
    }
  }
};

const bingoColumn = (player) => {
  for (let i = 0; i < 5; i++) {
    let numOfCorrect = 0;
    for (let x = 0; x < 5; x++) {
      if (playerBoards[(player * 5 * 5) + (x * 5) + i] == -1) {
        numOfCorrect++; 
      }
    }
    if (numOfCorrect == 5) {
      return player;
    }
  }
};

const checkBingo = () => {
  for (let x = 0; x < numOfPlayers; x++) {
    if (!playersThatHaveBingo.includes(x)) {
      if (bingoRow(x) || bingoColumn(x)) {
        playersThatHaveBingo.push(x);
      }
    }
  }
};

const passNumber = (num) => {
  playerBoards = playerBoards.map(x => x == num ? -1 : x);
};

const getPlayerSum = (player) => {
  var sum = 0;
  for (var x = 0; x < 5; x++) {
    for (var y = 0; y < 5; y++){
      const num = playerBoards[(5 * 5 * player) + (x * 5) + y];
      if (num > 0) {
        sum += num;
      }
    }
  }
  return sum;
};

let actualPlayer = -1;
lines.forEach((line, index) => {
  if (line == '') {
    actualPlayer++;
  }
  else {
    line.split(' ').filter(x => x).map(x => x.trimStart()).forEach(x => playerBoards.push(parseInt(x)));
  }
});

var lastBingoArrayLength = 0;
for (var i = 0; i < bingoNumbers.length; i++){
  const val = bingoNumbers[i];
  passNumber(val);
  checkBingo();
  if (playersThatHaveBingo.length > lastBingoArrayLength) {
    for (var x = lastBingoArrayLength; x < playersThatHaveBingo.length; x++){
      console.log(`Bingooo :${playersThatHaveBingo[x]}`);
      console.log(getPlayerSum(playersThatHaveBingo[x]) * val);
      lastBingoArrayLength++;
    }
  }
};




