import { useState } from 'react';
import ChannelList from './ChannelList/ChannelList';
import MessagePanel from './MessagePanel';
import { MobileScreenView } from '../types/stateTypes';

const MobileView = () => {
  const [mobileScreenView, setMobileScreenView] = useState(
    MobileScreenView.channelView
  );

  return (
    <>
      {mobileScreenView === MobileScreenView.channelView ? (
        <ChannelList setMobileScreenView={setMobileScreenView} />
      ) : (
        <MessagePanel setMobileScreenView={setMobileScreenView} />
      )}
    </>
  );
};

export default MobileView;
