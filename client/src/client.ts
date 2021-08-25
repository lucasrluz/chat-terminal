import { io } from 'socket.io-client';
import { renderOptions } from './renderOptions';

async function start() {
  const username: string = await renderOptions();

  const socket = io('http://localhost:3000');
}
start();