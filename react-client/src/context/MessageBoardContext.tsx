import { useReducer, useEffect, createContext } from 'react';
import { messageBoardReducer } from '.';
import {
  MessageBoardContextProps,
  MessageBoardState,
  Channel,
  Message,
} from '../types';
import APIService from '../apiServices';
import { socket } from '../socket';
import { AppTheme } from '../types/stateTypes';

export const MessageBoardContext = createContext<MessageBoardContextProps>({
  theme: AppTheme.system,
  channels: [],
  selectedChannel: null,
  messages: new Map(),
  setChannels: () => {},
  selectChannel: () => {},
  setMessages: () => {},
  addMessage: () => {},
  setTheme: () => {},
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
    theme: AppTheme.system,
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

  const setTheme = (theme: AppTheme) => {
    dispatch({ type: 'SET_THEME', payload: theme });
  };

  //update other users with the new broadcast
  const handleBroadCastMessage = (broadcastMessage: {
    newMessage: Message;
    channelId: string;
  }) => {
    addMessage(broadcastMessage.newMessage, broadcastMessage.channelId);
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

  useEffect(() => {
    // Listen for 'newMessage' events broadcast by the server
    // and update users in real-time
    socket.on('newMessage', handleBroadCastMessage);

    // Clean up on component unmount
    return () => {
      socket.off('newMessage', handleBroadCastMessage);
    };
  }, []);

  return (
    <MessageBoardContext.Provider
      value={{
        ...state,
        setChannels,
        selectChannel,
        setMessages,
        addMessage,
        setTheme,
      }}
    >
      {children}
    </MessageBoardContext.Provider>
  );
};
