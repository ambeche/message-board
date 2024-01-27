import { useState } from 'react';
import { useMessageBoard } from '../../context';
import APIService from '../../apiServices';
import styles from './messageEditor.module.css';

const MessageEditor = () => {
  const { selectedChannel } = useMessageBoard();
  const [newMessage, setNewMessage] = useState('');

  const postMessageToChannel = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (selectedChannel && newMessage.trim()) {
      //Posting message to server
      // The saved message from the server is broadcast to all connected clients in real-time.
      await APIService.addMessage(selectedChannel.id, newMessage);
    }
    setNewMessage('');
  };

  return selectedChannel ? (
    <div className={styles.container}>
      <form onSubmit={postMessageToChannel}>
        <div className={styles.editor}>
          <textarea
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
            placeholder='Message...'
            name='addMessageForm'
            className={styles.textarea}
          />
          <button
            disabled={!newMessage.trim()}
            type='submit'
            className={styles.button}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  ) : null;
};

export default MessageEditor;
