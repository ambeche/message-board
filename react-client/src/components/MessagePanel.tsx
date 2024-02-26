import { useMessageBoard } from '../context/useMessageBoard';
import { useViewport } from '../context/useViewport';
import { MobileScreenView } from '../types/stateTypes';
import MessageEditor from './MessageEditor/MessageEditor';
import MessageList from './MessageList/MessageList';

type MessagePanelProps = {
  setMobileScreenView?: (view: MobileScreenView) => void;
};

const MessagePanel = ({ setMobileScreenView }: MessagePanelProps) => {
  const { selectedChannel } = useMessageBoard();
  const { width } = useViewport();

  const isMobile = width <= 768;

  return (
    <>
      <div className='message-container'>
        <div className='message-header'>
          {isMobile ? (
            <button
              onClick={
                setMobileScreenView &&
                (() => setMobileScreenView(MobileScreenView.channelView))
              }
            >
              Back
            </button>
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
