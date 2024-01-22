import { Channels } from "../models/channel";
import { APIResponse } from "../types";

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
  return {
    error: {
      status: 404,
      message: `No channel exists with the specified id, ${channelId}!`,
    },
  };
};
