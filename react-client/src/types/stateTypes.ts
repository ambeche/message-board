export interface Channel {
  id: string;
  description: string;
}

export interface Message {
  id: number;
  content: string;
  timestamp: string;
}

//Structure mapps channelId to the messages of a channel
export type MessagesMappedToChannel = Map<string, Message[]>;

export interface MessageBoardState {
  channels: Channel[];
  selectedChannel: Channel | null;
  messages: MessagesMappedToChannel;
}

export interface MessageBoardContextProps {
  channels: Channel[];
  selectedChannel: Channel | null;
  messages: MessagesMappedToChannel;
  setChannels: (channel: Channel[]) => void;
  selectChannel: (channel: Channel) => void;
  setMessages: (messages: Message[], channelId: string) => void;
}
