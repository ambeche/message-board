export interface Channel {
  id: string;
  description: string;
}

export interface Message {
  id: number;
  content: string;
  timestamp: string;
}

export interface MessageBoardState {
  channels: Channel[];
  selectedChannel: Channel | null;
  messages: Message[];
}

export interface MessageBoardContextProps {
  channels: Channel[];
  selectedChannel: Channel | null;
  messages: Message[];
  setChannels: (channel: Channel[]) => void;
  selectChannel: (channel: Channel) => void;
  setMessages: (messages: Message[]) => void;
}
