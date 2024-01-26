type ChannelCardProps = {
  id: string;
  description: string;
  onSelect: () => void;
};
const ChannelCard = ({ id, description, onSelect }: ChannelCardProps) => {
  return (
    <div className='channel-card' onClick={onSelect}>
      <h4>{id}</h4>
      {description}
    </div>
  );
};
export default ChannelCard;
