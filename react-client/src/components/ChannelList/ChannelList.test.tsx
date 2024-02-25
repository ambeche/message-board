// ChannelList.test.tsx

import { render, screen } from '@testing-library/react';
import ChannelList from './ChannelList';
import { MessageBoardContext } from '../../context/MessageBoardContext';
import { AppTheme } from '../../types/stateTypes';

const mockChannels = [
  { id: 'general', description: 'General channel' },
  { id: 'random', description: 'Random channel' },
];
const mockAddMessage = jest.fn();
const mockSetMessages = jest.fn();
const mockSetChannels = jest.fn();
const mockSelectChannel = jest.fn();
const mockSetTheme = jest.fn();
const messages = new Map();
const theme = AppTheme.system;

describe('ChannelList', () => {
  test('renders a list of channels', () => {
    render(
      <MessageBoardContext.Provider
        value={{
          channels: mockChannels,
          selectedChannel: null,
          messages,
          theme,
          setChannels: mockSetChannels,
          setMessages: mockSetMessages,
          addMessage: mockAddMessage,
          selectChannel: mockSelectChannel,
          setTheme: mockSetTheme,
        }}
      >
        <ChannelList />
      </MessageBoardContext.Provider>
    );
    const generalChannel = screen.getByText(/General channel/i);
    const randomChannel = screen.getByText(/Random channel/i);
    expect(generalChannel).toBeTruthy();
    expect(randomChannel).toBeTruthy();
  });
});
