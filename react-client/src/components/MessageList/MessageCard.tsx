import styles from './messageList.module.css';

type MessageCardProps = {
  id: number;
  time: string;
  date: string;
  content: string;
};
const MessageCard = ({ content, time, date }: MessageCardProps) => {
  return (
    <div className={styles.messageCard}>
      <div className={styles.message}>{content}</div>
      <div className={styles.timestamp}>
        <div>{date}</div>
        <div>{time}</div>
      </div>
    </div>
  );
};

export default MessageCard;
