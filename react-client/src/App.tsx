import ChannelList from './components/ChannelList/ChannelList';
import MessageEditor from './components/MessageEditor/MessageEditor';
import MessageList from './components/MessageList/MessageList';
import { useMessageBoard } from './context/useMessageBoard';
import './App.css';
import { toggledTheme } from './utils';
import { useState, useEffect } from 'react';

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width };
};

const App = () => {
  const { selectedChannel, theme } = useMessageBoard();
  const { width } = useViewport();
  const [mobileView] = useState('channelListView');
  return (
    <div className={`app-container ${toggledTheme(theme)}`}>
      {width < 768 ? (
        <>
          {mobileView === 'channelListView' && !selectedChannel?.id ? (
            <ChannelList />
          ) : (
            <div className='message-container'>
              <div className='message-header'>
                <div>Message Board</div>
                <div className='selected-channel'>{selectedChannel?.id}</div>
              </div>

              <MessageList />
              <MessageEditor key={selectedChannel?.id} />
            </div>
          )}
        </>
      ) : (
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
      )}
    </div>
  );
};

export default App;
