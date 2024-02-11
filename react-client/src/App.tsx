import ChannelList from './components/ChannelList/ChannelList';
import MessageEditor from './components/MessageEditor/MessageEditor';
import MessageList from './components/MessageList/MessageList';
import { useMessageBoard } from './context/useMessageBoard';
import './App.css';
import { toggledTheme } from './utils';

const App = () => {
  const { selectedChannel, theme } = useMessageBoard();
  return (
    <div className={`app-container ${toggledTheme(theme)}`}>
      <ChannelList />
      <div className='message-container'>
        <div className='message-header'>
          <div>Message Board</div>
          <div className='selected-channel'>{selectedChannel?.id}</div>
        </div>

        <MessageList />
        <MessageEditor key={selectedChannel?.id} />
      </div>
    </div>
  );
};

export default App;
