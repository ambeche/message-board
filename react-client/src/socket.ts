import { io } from 'socket.io-client';

const URI =
  process.env.NODE_ENV === 'production'
    ? 'https://messenge--board-64c5f8903fd9.herokuapp.com/'
    : 'http://localhost:3005';

export const socket = io(URI);
