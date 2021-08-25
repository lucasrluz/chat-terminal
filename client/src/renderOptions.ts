import { login } from "./login";
import { question } from "./readline";
import { registration } from "./registration";

export async function renderOptions() {
  while(true) {
    process.stdout.write('\u001b[H\u001b[2J\u001b[3J');
    
    console.info('[ 0 ] - Login');
    console.info('[ 1 ] - New Account');
    console.info('[ 2 ] - Close Application');

    const option: any = await question('> ');
    
    if (option === '0') {
      var username: string = await login();
      break;
    }

    if (option === '1') await registration();
    
    if (option === '2') {
      process.stdout.write('\u001b[H\u001b[2J\u001b[3J');
      return process.exit(0);
    }
  }
  return username;
}