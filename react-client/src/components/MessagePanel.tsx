import { useMessageBoard } from '../context/useMessageBoard';
import { useViewport } from '../context/useViewport';
import { MobileScreenView, MobileViewProps } from '../types/stateTypes';
import MessageEditor from './MessageEditor/MessageEditor';
import MessageList from './MessageList/MessageList';

type MessagePanelProps = MobileViewProps;

const MessagePanel = ({ setMobileScreenView }: MessagePanelProps) => {
  const { selectedChannel, selectChannel } = useMessageBoard();
  const { width } = useViewport();

  const isMobile = width <= 768;

  const handleMobileViewNav = () => {
    setMobileScreenView && setMobileScreenView(MobileScreenView.channelView);
    selectChannel(null);
  };

  return (
    <>
      <div className='message-container'>
        <div className='message-header'>
          {isMobile ? (
            <div onClick={handleMobileViewNav} className='back-arrow-button'>
              &#129104;
            </div>
          ) : null}
          <div>Message Board</div>
          <div className='selected-channel'>{selectedChannel?.id}</div>
        </div>
        <MessageList />
        <MessageEditor key={selectedChannel?.id} />
      </div>
    </>
  );
};

export default MessagePanel;
