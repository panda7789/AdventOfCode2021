const fs = require('fs');

let increases = 0;

let window = [2, 1, 0, 0];
let windowSum = [0, 0, 0, 0];

let previousSum = 0;
let currentSum = 0;

let binaryWindow = [
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 0],
  [0, 1, 1, 1],
];


const numbers = fs.readFileSync('./1/input.txt', 'utf8').split('\n').map(x => parseInt(x));

windowSum[0] = numbers[0] + numbers[1];
windowSum[1] = numbers[1];
  
numbers.forEach((value, index) => {
  if (index > 1) {
    binaryWindow[index % 4].forEach((allowed, ndex) => {
      if (allowed) {
        windowSum[ndex] += value;
        window[ndex]++;
        if (window[ndex] == 3) {
          console.log(`sum ${windowSum[ndex]}`);
          previousSum = currentSum;
          currentSum = windowSum[ndex];
          window[ndex] = 0;
          windowSum[ndex] = 0;
          if (currentSum > previousSum && previousSum > 0) {
            increases++;
          }
        }
      }
    });
  }
});

console.log(increases);

