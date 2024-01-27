import { useState } from 'react';
import { useMessageBoard } from '../../context';
import APIService from '../../apiServices';
import styles from './messageEditor.module.css';

const MessageEditor = () => {
  const { selectedChannel, addMessage } = useMessageBoard();
  const [newMessage, setNewMessage] = useState('');

  const postMessageToChannel = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (selectedChannel && newMessage.trim()) {
      addMessage(
        {
          /**
           * For consistency, the message timestamp and id properties are provided by the backend.
           * They are only defined here to provide an immediate response to the submitting user
           * and will be updated once refreshed with the actual values from the server.
           */
          id: Date.now() + newMessage.length, // temporal id
          content: newMessage,
          timestamp: new Date().toISOString(), // temporal timestamp
        },
        selectedChannel.id
      );
      //Posting message to server
      await APIService.addMessage(selectedChannel.id, newMessage);
    }
    setNewMessage('');
  };

  return selectedChannel ? (
    <div className={styles.container}>
      <form onSubmit={postMessageToChannel}>
        <textarea
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
          placeholder='Message...'
        />
        <button disabled={!newMessage.trim()} type='submit'>
          Send
        </button>
      </form>
    </div>
  ) : null;
};

export default MessageEditor;
