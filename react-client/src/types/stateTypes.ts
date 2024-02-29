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
  theme: AppTheme;
  redirectToChannelView?: boolean;
}

export type MobileViewProps = {
  setMobileScreenView?: () => void;
};

export enum AppTheme {
  system = 'system',
  dark = 'dark',
  light = 'light',
}

export enum MobileScreenView {
  channelView = 'channelView',
  messageView = 'messageView',
}

export interface MessageBoardContextProps {
  theme: AppTheme;
  channels: Channel[];
  selectedChannel: Channel | null;
  messages: MessagesMappedToChannel;
  setChannels: (channel: Channel[]) => void;
  selectChannel: (channel: Channel | null) => void;
  setMessages: (messages: Message[], channelId: string) => void;
  addMessage: (message: Message, channelId: string) => void;
  setTheme: (theme: AppTheme) => void;
}
