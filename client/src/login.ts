import axios from "axios";
import { question } from "./readline";
import { renderOptions } from "./renderOptions";

export async function login() {
  while(true) {
    process.stdout.write('\u001b[H\u001b[2J\u001b[3J');
    
    console.info('[ 0 ] - Back');

    var username: any = await question('Username: ');

    if (username === '0') return renderOptions();

    const response: string = await axios.post('http://localhost:3000/login', {
      username: username
    })
    .then((response) => response.statusText)
    .catch((error) => error.response.statusText);

    if (response === 'OK') break;
  }
  process.stdout.write('\u001b[H\u001b[2J\u001b[3J');
  return username;
}