import Message from "./message";

interface Channel {
  id: string;
  description: string;
  messages: Message[];
}
export default Channel;

export type Channels = Map<string, Channel>;
export type ChannelList = Omit<Channel, "messages">[];
