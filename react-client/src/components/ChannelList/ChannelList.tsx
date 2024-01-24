import { useMessageBoard } from '../../context';

const ChannelList = () => {
  const { channels, selectChannel } = useMessageBoard();

  return (
    <div className='channel-list'>
      <h1>Channels</h1>
      {channels.map((channel) => (
        <div
          key={channel.id}
          className='channel-item'
          onClick={() => selectChannel(channel)}
        >
          <h4> {channel.id}</h4>
          {channel.description}
        </div>
      ))}
    </div>
  );
};

export default ChannelList;
