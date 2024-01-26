import ChannelList from './components/ChannelList/ChannelList';
import MessageEditor from './components/MessageEditor/MessageEditor';
import MessageList from './components/MessageList/MessageList';
import { useMessageBoard } from './context/useMessageBoard';

const App = () => {
  const { selectedChannel } = useMessageBoard();
  return (
    <div>
      <ChannelList />
      <div className='message-container'>
        <h1>Message Board - {selectedChannel?.id}</h1>
        <MessageList />
        <MessageEditor key={selectedChannel?.id} />
      </div>
    </div>
  );
};

export default App;
