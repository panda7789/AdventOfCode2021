const fs = require('fs');

let lines = fs.readFileSync('./03/input.txt', 'utf-8').split('\n');
const binarylength = lines[0].length;
const binarySum = new Array(binarylength).fill(0);

const countSum = (inLines, wantedNumber) => {
  let x = 0;
  inLines.forEach((line) => {
      line[wantedNumber] == 1 ? x += 1 : x -= 1;
  });
  return x;
};
 
for (let i = 0; i < binarylength; i++){
  binarySum[i] = countSum(lines, i);
}


let gamma = binarySum.map(x => x >= 0 ? 1 : 0);
let epsilon = binarySum.map(x => x >= 0 ? 0 : 1);
let linesG = lines.map(x => x);
let linesE = lines.map(x => x);
let gammaNum = 0;
let epsilonNum = 0;

for (let i = 0; i < binarylength; i++){
  linesG = linesG.filter(x => x[i] == gamma[i]);
  linesE = linesE.filter(x => x[i] == epsilon[i]);
  if (linesG.length == 1) {
    console.log(linesG[0]);
    gammaNum = linesG[0];
  }
  if (linesE.length == 1) {
    console.log(linesE[0]);
    epsilonNum = linesE[0];
  }
  const a = countSum(linesG, i + 1) >= 0 ? 1 : 0;
  const b = countSum(linesE, i + 1) >= 0 ? 0 : 1;
  gamma[i + 1] = a;
  epsilon[i + 1] = b;
}

console.log(parseInt(gammaNum, 2) * parseInt(epsilonNum, 2));
