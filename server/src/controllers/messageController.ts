import { Channels } from "../models/channel";
import { APIResponse } from "../types";

const setResponseError = (
  invalideParam: string,
  status = 404,
  errorMessage = "No channel exists for the specified id"
) => {
  return { error: { status, message: `${errorMessage}, ${invalideParam}!` } };
};

/**
 * Find channel by id and return the messages of the specified channel
 * @param channelId
 * @param channels
 * @returns APIResponse - data containing the messages or error object
 */
export const getChennelMessages = (
  channelId: string,
  channelStore: Channels
): APIResponse => {
  const channel = channelStore.get(channelId);
  if (channel) {
    return { data: channel.messages };
  }
  return setResponseError(channelId);
};

export const addMessagesToChannel = (
  channelId: string,
  message: string,
  channelStore: Channels
): APIResponse => {
  const channel = channelStore.get(channelId);
  if (channel) {
    channel.messages.push({
      id: 1,
      content: message,
      timestamp: new Date().toDateString(),
    });
    return { data: channel.messages };
  }
  return setResponseError(channelId);
};
