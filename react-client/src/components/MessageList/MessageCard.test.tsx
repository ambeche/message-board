import { render, screen } from '@testing-library/react';
import MessageCard from './MessageCard';

describe('ChannelCard', () => {
  test('renders MessageCard component with provided props', () => {
    const mockMessage = {
      id: 1,
      content: 'Hello world, I am happy to be here!',
      date: 'February 25',
      time: '12:20',
    };
    render(<MessageCard {...mockMessage} />);

    const cardContent = screen.getByText(
      /Hello world, I am happy to be here!/i
    );
    expect(cardContent).toBeTruthy();
  });
});
