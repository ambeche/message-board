import { ChannelList, Channels } from "../models/channel";

/**
 * Returns a list of channels metadata from db
 * @param channels
 * @returns ChanelList
 */
export const getChannelList = (channels: Channels): ChannelList => {
  return Array.from(channels.values()).map(({ id, description }) => ({
    id,
    description,
  }));
};
