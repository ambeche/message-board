import { useMessageBoard } from '../../context';
import { Channel, MobileViewProps } from '../../types/stateTypes';
import ThemeMenu from '../ThemeMenu/ThemeMenu';
import ChannelCard from './ChannelCard';
import styles from './channelList.module.css';

type ChannelListProps = MobileViewProps;

const ChannelList = ({ setMobileScreenView }: ChannelListProps) => {
  const { channels, selectedChannel, selectChannel } = useMessageBoard();

  const isMobile = setMobileScreenView !== undefined;

  const onSelectChannel = (channel: Channel) => {
    selectChannel(channel);
    if (isMobile) {
      setMobileScreenView();
    }
  };
  return (
    <div>
      <div className={styles.panel}>
        <div className={styles.panelTitle}>Channels</div>
        <ThemeMenu />
      </div>
      {isMobile && (
        <div className={styles.infoContainer}>
          Select a channel to chat or see messages!
        </div>
      )}
      <div className={styles.verticalScroll}>
        {channels.map((channel) => (
          <div key={channel.id}>
            <ChannelCard
              {...channel}
              selectedChannel={selectedChannel}
              onSelect={() => onSelectChannel(channel)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelList;
