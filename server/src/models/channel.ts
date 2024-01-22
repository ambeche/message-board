import Message from "./message";

interface Channel {
  id: number;
  name: string;
  description: string;
  messages: Message[];
}
export default Channel;

export type Channels = Map<number, Channel>;
export type ChannelList = Omit<Channel, "messages">[];
