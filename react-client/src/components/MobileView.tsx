import { useEffect, useState } from 'react';
import ChannelList from './ChannelList/ChannelList';
import MessagePanel from './MessagePanel';
import { MobileScreenView } from '../types/stateTypes';
import { useMessageBoard } from '../context/useMessageBoard';

const MobileView = () => {
  const [mobileScreenView, setMobileScreenView] = useState(
    window.history.state?.mobileScreenView || MobileScreenView.channelView
  );
  const { selectedChannel } = useMessageBoard();

  useEffect(() => {
    const handlePopState = () => {
      const currentView =
        window.history.state?.mobileScreenView || MobileScreenView.channelView;
      if (
        !selectedChannel &&
        mobileScreenView === MobileScreenView.channelView
      ) {
        window.history.back();
      }

      setMobileScreenView(currentView);
    };

    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, [mobileScreenView, selectedChannel]);

  const changeView = (view: MobileScreenView) => {
    if (mobileScreenView === MobileScreenView.channelView) {
      window.history.pushState(
        { mobileScreenView: MobileScreenView.channelView },
        ''
      );
      window.history.replaceState({ mobileScreenView: view }, '');
      setMobileScreenView(view);
    } else {
      window.history.back();
    }
  };

  return (
    <>
      {mobileScreenView === MobileScreenView.channelView ? (
        <ChannelList
          setMobileScreenView={() => changeView(MobileScreenView.messageView)}
        />
      ) : (
        <MessagePanel
          setMobileScreenView={() => changeView(MobileScreenView.channelView)}
        />
      )}
    </>
  );
};

export default MobileView;
