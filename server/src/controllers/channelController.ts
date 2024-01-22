import { ChannelList, Channels } from "../models/channel";

/**
 * Returns a list of message channels metadata from db
 * @param channels
 * @returns ChanelList
 */
export const getChannelList = (channels: Channels): ChannelList => {
  return Array.from(channels.values()).map(({ id, name, description }) => ({
    id,
    name,
    description,
  }));
};
