import { render, screen, fireEvent } from '@testing-library/react';
import ChannelCard from './ChannelCard';

describe('ChannelCard', () => {
  test('renders ChannelCard component with provided props', () => {
    const mockSelect = jest.fn();
    render(
      <ChannelCard
        id='general'
        description='General channel'
        selectedChannel={null}
        onSelect={mockSelect}
      />
    );

    const channelElement = screen.getByText(/General channel/i);
    expect(channelElement).toBeTruthy();
  });

  test('calls onSelect when clicked', () => {
    const mockSelect = jest.fn();
    render(
      <ChannelCard
        id='general'
        description='General channel'
        selectedChannel={null}
        onSelect={mockSelect}
      />
    );

    const card = screen.getByTestId('card-test-id');
    fireEvent.click(card);
    expect(mockSelect).toHaveBeenCalledTimes(1);
  });
});
