import { useMessageBoard } from '../../context';
import ChannelCard from './ChannelCard';

const ChannelList = () => {
  const { channels, selectChannel } = useMessageBoard();

  return (
    <div className='channel-list'>
      <h1>Channels</h1>
      {channels.map((channel) => (
        <div key={channel.id}>
          <ChannelCard {...channel} onSelect={() => selectChannel(channel)} />
        </div>
      ))}
    </div>
  );
};

export default ChannelList;
