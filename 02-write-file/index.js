const fs = require('fs');
const path = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Type some text! \n');
fs.writeFile(path.join(__dirname, 'text.txt'), '', (error) => {
  if (error) console.log(error.message);
});

rl.on('line', (chunk) => {
  let data = chunk.toString().trim();
  if (data !== 'exit') {
    fs.appendFile(path.join(__dirname, 'text.txt'), chunk + '\n', (error) => {
      if (error) console.log(error.message);
    });
  } else {
    process.exit();
  }
});

process.on('SIGINT', () => process.exit());
process.on('exit', () => console.log('\nThanks for your text!'));
