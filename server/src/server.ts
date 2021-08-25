import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import { router } from './route';

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.use(express.json());
app.use(router);

httpServer.listen(3000);