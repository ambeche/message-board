import { Channel } from '../../types';
import styles from './channelList.module.css';

type ChannelCardProps = {
  id: string;
  description: string;
  selectedChannel: Channel | null;
  onSelect: () => void;
};
const ChannelCard = ({
  id,
  description,
  selectedChannel,
  onSelect,
}: ChannelCardProps) => {
  return (
    <div
      className={`${styles.card} ${
        selectedChannel?.id === id ? styles.selected : ''
      }`}
      onClick={onSelect}
    >
      <h4>{id}</h4>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
export default ChannelCard;
