import { render, screen } from '@testing-library/react';
import MessageList from './MessageList';
import { AppTheme } from '../../types/stateTypes';
import { MessageBoardContext } from '../../context/MessageBoardContext';

const messages = new Map([
  [
    'General',
    [{ id: 1, content: 'Hello World', timestamp: new Date().toISOString() }],
  ],
]);

describe('MessageList', () => {
  const mockAddMessage = jest.fn();
  const mockSetMessages = jest.fn();
  const mockSetChannels = jest.fn();
  const mockSelectChannel = jest.fn();
  const mockSetTheme = jest.fn();
  const theme = AppTheme.system;
  test('renders messages for the selected channel', () => {
    render(
      <MessageBoardContext.Provider
        value={{
          channels: [],
          selectedChannel: {
            id: 'General',
            description: 'For general discussions',
          },
          messages,
          theme,
          setChannels: mockSetChannels,
          setMessages: mockSetMessages,
          addMessage: mockAddMessage,
          selectChannel: mockSelectChannel,
          setTheme: mockSetTheme,
        }}
      >
        <MessageList />
      </MessageBoardContext.Provider>
    );
    screen.debug();
    const messageElement = screen.getByText(/Hello World/i);
    expect(messageElement).toBeTruthy();
  });
});
