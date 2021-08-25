import { io } from 'socket.io-client';

async function start() {
  const socket = io('http://localhost:3000');
}
start();