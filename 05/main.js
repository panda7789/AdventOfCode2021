const { Console } = require('console');
const fs = require('fs');

let lines = fs.readFileSync('./05/input.txt', 'utf-8').split('\n');
lines = lines.map(x => x.split(' -> '));
for (var x = 0; x < lines.length; x++){
  console.log(`in ${lines[x][0]} - out ${lines[x][1]}`);
  const _in = lines[x][0].split(',').map(x => parseInt(x));
  const _out = lines[x][1].split(',').map(x => parseInt(x));
  let prvniNegace = false;
  let druhaNegace = 1;
  if (_in[0] > _out[0]) {
    prvniNegace = true;
  }
  if (_in[1] > _out[1]) {
    druhaNegace = true;
  }
  for (var i = _in[0]; prvniNegace ? i >= _out[0] : i <= _out[0]; prvniNegace ? i-- : i++){
    for (var j = _in[1]; druhaNegace ? j >= _out[1] : j <= _out[1]; druhaNegace ? j-- : j++){
      console.log(`${i} - ${j}`);
    }
  }
}
console.log(lines);