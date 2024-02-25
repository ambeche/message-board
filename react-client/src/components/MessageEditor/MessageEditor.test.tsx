import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MessageEditor from './MessageEditor';
import { MessageBoardContext } from '../../context/MessageBoardContext';
import { AppTheme } from '../../types/stateTypes';

// Mocking axios to simulate API call for posting message
// Should be called at the top of the test file.s
jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('MessageEditor', () => {
  const mockAddMessage = jest.fn();
  const mockSetMessages = jest.fn();
  const mockSetChannels = jest.fn();
  const mockSelectChannel = jest.fn();
  const mockSetTheme = jest.fn();
  const theme = AppTheme.system;

  // Clear all mocks after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('allows message input and submission', async () => {
    const mockSelectedChannel = {
      id: 'General',
      description: 'General discussions',
    };

    // Mock implementation for axios.post
    const mockData = {
      content: 'Hello world',
      id: 20,
      timestamp: new Date().toISOString(),
    };
    mockedAxios.post.mockResolvedValue(mockData);

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
