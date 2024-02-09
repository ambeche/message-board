import { useMessageBoard } from '../../context';
import ChannelCard from './ChannelCard';
import styles from './channelList.module.css';

const ChannelList = () => {
  const { channels, selectedChannel, selectChannel } = useMessageBoard();

  return (
    <div>
      <div className={styles.panel}>Channels</div>
      <div className={styles.verticalScroll}>
        {channels.map((channel) => (
          <div key={channel.id}>
            <ChannelCard
              {...channel}
              selectedChannel={selectedChannel}
              onSelect={() => selectChannel(channel)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelList;
