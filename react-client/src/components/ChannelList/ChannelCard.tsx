/* eslint-disable react-refresh/only-export-components */
import { memo } from 'react';
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
      <h5>{id}</h5>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default memo(
  ChannelCard,
  (prevProp, nextProp) =>
    prevProp.selectedChannel?.id === nextProp.selectedChannel?.id
);
