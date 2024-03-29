import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import channelStore from './db';
import { getChannelList } from './controllers/channelController';
import {
  addMessagesToChannel,
  getChennelMessages,
} from './controllers/messageController';
import {
  messageBoardHttpErrorHandler,
  parseAndValidateString,
} from './utils/utils';
import Message from './models/message';
import cors = require('cors');
import {
  DEV_CLIENT_URL_FOR_CORS,
  PDT_BUILD_CLIENT_URL_FOR_CORS,
} from './utils/config';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('build/dist'));

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: [DEV_CLIENT_URL_FOR_CORS, PDT_BUILD_CLIENT_URL_FOR_CORS],
  },
});

app.get('/api/channels', (_req, res, next) => {
  try {
    const channelList = getChannelList(channelStore);
    res.json(channelList);
  } catch (error: unknown) {
    next(error);
  }
});

app.get('/api/messages/:channelId', (req, res, next) => {
  try {
    const channelId = req.params.channelId;
    const messages: Message[] = getChennelMessages(channelId, channelStore);
    if (messages) {
      res.json(messages);
    }
  } catch (error: unknown) {
    next(error);
  }
});

app.post('/api/:channelId', (req, res, next) => {
  try {
    const channelId = req.params.channelId;
    const messageToBeAdded = parseAndValidateString(req.body.message);
    const addedMessage = addMessagesToChannel(
      channelId,
      messageToBeAdded,
      channelStore
    );
    if (addedMessage) {
      // Broadcast the saved message to all connected clients or users
      io.emit('newMessage', {
        newMessage: addedMessage,
        channelId,
      });

      res.status(201).json({ addedMessage });
    }
  } catch (error: unknown) {
    next(error);
  }
});

// Handles http error responses
app.use(messageBoardHttpErrorHandler);

app.use((_req, res, _next) => {
  res.status(404).json({ error: 'Resource Not Found' });
});

export default server;
