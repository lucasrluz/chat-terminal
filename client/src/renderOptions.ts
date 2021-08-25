export async function renderOptions() {
  while(true) {
    process.stdout.write('\u001b[H\u001b[2J\u001b[3J');
    
    console.info('[ 0 ] - Login');
    console.info('[ 1 ] - New Account');
    console.info('[ 2 ] - Close Application');
  }
}