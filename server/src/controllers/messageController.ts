import { Channels } from '../models/channel';
import Message from '../models/message';
import { MessageBoardHttpError, generateUniqueRandomId } from '../utils';

const errorMessage = 'No channel exists for the specified id';

/**
 * Find channel by id and return the messages of the specified channel
 * @param channelId
 * @param channels
 * @returns APIResponse - data containing the messages or error object
 */
export const getChennelMessages = (
  channelId: string,
  channelStore: Channels
): Message[] => {
  const channel = channelStore.get(channelId);
  if (channel) {
    return channel.messages;
  }
  throw new MessageBoardHttpError(`${errorMessage}, ${channelId}!`, 404);
};

export const addMessagesToChannel = (
  channelId: string,
  message: string,
  channelStore: Channels
): Message[] => {
  const channel = channelStore.get(channelId);
  if (channel) {
    const timestamp = new Date().toISOString();
    const id = generateUniqueRandomId();

    channel.messages.push({
      id,
      timestamp,
      content: message,
    });
    return channel.messages;
  }
  throw new MessageBoardHttpError(`${errorMessage}, ${channelId}!`, 404);
};
