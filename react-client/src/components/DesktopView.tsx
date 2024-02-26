import { useMessageBoard } from '../context/useMessageBoard';
import ChannelList from './ChannelList/ChannelList';
import MessageEditor from './MessageEditor/MessageEditor';
import MessageList from './MessageList/MessageList';

const DesktopView = () => {
  const { selectedChannel } = useMessageBoard();
  return (
    <>
      <ChannelList />
      <div className='message-container'>
        <div className='message-header'>
          <div>Message Board</div>
          <div className='selected-channel'>{selectedChannel?.id}</div>
        </div>
        <MessageList />
        <MessageEditor key={selectedChannel?.id} />
      </div>
    </>
  );
};

export default DesktopView;
