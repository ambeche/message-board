import styles from './messageList.module.css';

type MessageCardProps = {
  id: number;
  timestamp: string;
  content: string;
};
const MessageCard = ({ content, timestamp }: MessageCardProps) => {
  return (
    <div className={styles.messageCard}>
      <div className={styles.message}>{content}</div>
      <div className={styles.timestamp}>{timestamp}</div>
    </div>
  );
};

export default MessageCard;
