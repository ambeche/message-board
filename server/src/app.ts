import express from 'express';
import channelStore from './db';
import { getChannelList } from './controllers/channelController';
import {
  addMessagesToChannel,
  getChennelMessages,
} from './controllers/messageController';
import { messageBoardHttpErrorHandler, parseAndValidateString } from './utils';
import Message from './models/message';
import cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/channels', (_req, res, next) => {
  try {
    const channelList = getChannelList(channelStore);
    res.json(channelList);
  } catch (error: unknown) {
    next(error);
  }
});

app.get('/messages/:channelId', (req, res, next) => {
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

app.post('/:channelId', (req, res, next) => {
  try {
    const channelId = req.params.channelId;
    const messageToBeAdded = parseAndValidateString(req.body.message);
    const addedMessage = addMessagesToChannel(
      channelId,
      messageToBeAdded,
      channelStore
    );
    if (addedMessage) {
      res.status(201).json(addedMessage);
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

export default app;
