const fs = require('fs');

var horizontalPosition = 0;
var depth = 0;
var aim = 0;

fs.readFileSync('./02/input.txt', 'utf-8').split('\n').forEach((line) => {
  const x = line.split(' ');
  const command = x[0];
  const multiply = parseInt(x[1]);
  switch (command) {
    case 'forward':
      horizontalPosition += multiply;
      depth += aim * multiply;
      break;
    case 'down':
      aim += multiply;
      break;
    case 'up':
      aim -= multiply;
      break;
  }
});

console.log(horizontalPosition);
console.log(depth);
console.log(horizontalPosition * depth);
