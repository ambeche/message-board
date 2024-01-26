import { useReducer, useEffect, createContext } from 'react';
import { messageBoardReducer } from '.';
import {
  MessageBoardContextProps,
  MessageBoardState,
  Channel,
  Message,
} from '../types';
import APIService from '../apiServices';

export const MessageBoardContext = createContext<MessageBoardContextProps>({
  channels: [],
  selectedChannel: null,
  messages: new Map(),
  setChannels: () => {},
  selectChannel: () => {},
  setMessages: () => {},
  addMessage: () => {},
});

export const MessageBoardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialState: MessageBoardState = {
    channels: [],
    selectedChannel: null,
    messages: new Map(),
  };

  const [state, dispatch] = useReducer(messageBoardReducer, initialState);

  const setChannels = (channels: Channel[]) => {
    dispatch({ type: 'SET_CHANNELS', payload: channels });
  };

  const selectChannel = (channel: Channel) => {
    dispatch({ type: 'SELECT_CHANNEL', payload: channel });
  };

  const setMessages = (messages: Message[], channelId: string) => {
    dispatch({ type: 'SET_MESSAGES', payload: { messages, channelId } });
  };

  const addMessage = (message: Message, channelId: string) => {
    dispatch({ type: 'ADD_MESSAGE', payload: { message, channelId } });
  };

  // Fetch and load channels on app initialisation
  useEffect(() => {
    const getChannels = async () => {
      const channels = await APIService.getChannels();
      if (channels) {
        setChannels(channels);
      }
    };
    getChannels();
  }, []);

  return (
    <MessageBoardContext.Provider
      value={{ ...state, setChannels, selectChannel, setMessages, addMessage }}
    >
      {children}
    </MessageBoardContext.Provider>
  );
};
