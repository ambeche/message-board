type MessageCardProps = {
  id: number;
  timestamp: string;
  content: string;
};
const MessageCard = ({ content, timestamp }: MessageCardProps) => {
  return (
    <div className='message-card'>
      <div className='message-text'>{content}</div>
      <div className='message-timestamp'>{timestamp}</div>
    </div>
  );
};

export default MessageCard;
