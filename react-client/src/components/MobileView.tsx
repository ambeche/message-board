import { useState } from 'react';
import { useMessageBoard } from '../context/useMessageBoard';
import ChannelList from './ChannelList/ChannelList';
import MessagePanel from './MessagePanel';
import { MobileScreenView } from '../types/stateTypes';

const MobileView = () => {
  const { selectedChannel } = useMessageBoard();
  const [mobileScreenView, setMobileScreenView] = useState(
    MobileScreenView.channelView
  );

  return (
    <>
      {mobileScreenView === MobileScreenView.channelView &&
      !selectedChannel?.id ? (
        <ChannelList />
      ) : (
        <MessagePanel setMobileScreenView={setMobileScreenView} />
      )}
    </>
  );
};

export default MobileView;
