import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

httpServer.listen(3000);