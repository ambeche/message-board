import { io } from 'socket.io-client';

const URI =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3005';
console.log('env: ', process.env.NODE_ENV);

export const socket = io(URI);
