import { useMessageBoard } from './context/useMessageBoard';
import './App.css';
import { toggledTheme } from './utils';
import { useViewport } from './context/useViewport';
import DesktopView from './components/DesktopView';
import MobileView from './components/MobileView';

const App = () => {
  const { theme } = useMessageBoard();
  const { width } = useViewport();
  return (
    <div className={`app-container ${toggledTheme(theme)}`}>
      {width < 768 ? <MobileView /> : <DesktopView />}
    </div>
  );
};

export default App;
