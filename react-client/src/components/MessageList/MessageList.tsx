import { useEffect } from 'react';
import { useMessageBoard } from '../../context';
import APIService from '../../apiServices';
import MessageCard from './MessageCard';

const MessageList = () => {
  const { messages, setMessages, selectedChannel } = useMessageBoard();

  useEffect(() => {
    const fetchAndSetMessages = async () => {
      /** Load messages for a channel only if the channel is selected
       *  And messages are fetched only once from the server
       */
      if (
        selectedChannel &&
        (!messages.get(selectedChannel.id) ||
          messages.get(selectedChannel.id)?.length === 0)
      ) {
        const fetchedMessages = await APIService.getChannelsMessages(
          selectedChannel.id
        );
        if (fetchedMessages) {
          setMessages(fetchedMessages, selectedChannel.id);
        }
      }
    };
    fetchAndSetMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedChannel]);

  const channelsMessages = selectedChannel
    ? messages.get(selectedChannel.id) || []
    : [];

  return selectedChannel ? (
    <div className='message-list'>
      {channelsMessages.length > 0 ? (
        channelsMessages.map((message) => (
          <div key={message.id}>
            <MessageCard {...message} />
          </div>
        ))
      ) : (
        <p>No messages yet. Be the first to post!</p>
      )}
    </div>
  ) : (
    <p>Select a channel to see messages.</p>
  );
};

export default MessageList;
