import { useReducer, useEffect, createContext } from 'react';
import { messageBoardReducer } from '.';
import {
  MessageBoardContextProps,
  MessageBoardState,
  Channel,
  Message,
} from '../types';

export const MessageBoardContext = createContext<MessageBoardContextProps>({
  channels: [],
  selectedChannel: null,
  messages: [],
  setChannels: () => {},
  selectChannel: () => {},
  setMessages: () => {},
});

export const MessageBoardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialState: MessageBoardState = {
    channels: [],
    selectedChannel: null,
    messages: [],
  };

  const [state, dispatch] = useReducer(messageBoardReducer, initialState);

  const setChannels = (channels: Channel[]) => {
    dispatch({ type: 'SET_CHANNELS', payload: channels });
  };

  const selectChannel = (channel: Channel) => {
    dispatch({ type: 'SELECT_CHANNEL', payload: channel });
  };

  const setMessages = (messages: Message[]) => {
    dispatch({ type: 'SET_MESSAGES', payload: messages });
  };

  useEffect(() => {
    // Fetch and set channels
  }, []);

  return (
    <MessageBoardContext.Provider
      value={{ ...state, setChannels, selectChannel, setMessages }}
    >
      {children}
    </MessageBoardContext.Provider>
  );
};
