import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MessageEditor from './MessageEditor';
import { MessageBoardContext } from '../../context/MessageBoardContext';
import { AppTheme } from '../../types/stateTypes';

describe('MessageEditor', () => {
  const mockAddMessage = jest.fn();
  const mockSetMessages = jest.fn();
  const mockSetChannels = jest.fn();
  const mockSelectChannel = jest.fn();
  const mockSetTheme = jest.fn();
  const theme = AppTheme.system;

  test('allows message input and submission', async () => {
    const mockSelectedChannel = {
      id: 'General',
      description: 'General discussions',
    };

    render(
      <MessageBoardContext.Provider
        value={{
          channels: [],
          selectedChannel: mockSelectedChannel,
          messages: new Map(),
          theme,
          setChannels: mockSetChannels,
          setMessages: mockSetMessages,
          addMessage: mockAddMessage,
          selectChannel: mockSelectChannel,
          setTheme: mockSetTheme,
        }}
      >
        <MessageEditor />
      </MessageBoardContext.Provider>
    );

    const input = screen.getByTestId('textarea-test-id') as HTMLTextAreaElement;
    fireEvent.change(input, { target: { value: 'Test message' } });
    expect(input.value).toBe('Test message');

    const form = screen.getByTestId('message-form-test-id');
    fireEvent.submit(form);

    // Wait for expected outcome after form submission
    await waitFor(() => {
      // Ensure the input is cleared after submission
      expect(input.value).toBe('');
    });
  });
});
