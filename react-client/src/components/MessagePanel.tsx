import { useMessageBoard } from '../context/useMessageBoard';
import { useViewport } from '../context/useViewport';
import { MobileViewProps } from '../types/stateTypes';
import MessageEditor from './MessageEditor/MessageEditor';
import MessageList from './MessageList/MessageList';

type MessagePanelProps = MobileViewProps;

const MessagePanel = ({ setMobileScreenView }: MessagePanelProps) => {
  const { selectedChannel, selectChannel } = useMessageBoard();
  const { width } = useViewport();

  const isMobile = width <= 768;

  const handleMobileViewNav = () => {
    setMobileScreenView && setMobileScreenView();
    selectChannel(null);
  };

  return (
    <>
      <div className='message-container'>
        <div className='message-header'>
          {isMobile ? (
            <div onClick={handleMobileViewNav} className='back-arrow-button'>
              &#x21E6;
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
