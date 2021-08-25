import Readline from 'readline';
import util from 'util';

const readline = Readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export const question = util.promisify(readline.question).bind(readline);