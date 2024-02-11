import { useMessageBoard } from '../../context/useMessageBoard';
import { AppTheme } from '../../types/stateTypes';
import styles from './themeMenu.module.css';

const ThemeMenu = () => {
  const { theme, setTheme } = useMessageBoard();

  const toggleAppTheme = (theme: AppTheme) => () => {
    setTheme(theme);
  };
  return (
    <div className={styles.themeMenu}>
      <button className={styles.dropDownButton}>Toggle Theme</button>
      <div className={styles.themeItems}>
        <div
          className={theme === AppTheme.system ? styles.selectedTheme : ''}
          onClick={toggleAppTheme(AppTheme.system)}
        >
          System
        </div>
        <div
          className={theme === AppTheme.dark ? styles.selectedTheme : ''}
          onClick={toggleAppTheme(AppTheme.dark)}
        >
          Dark
        </div>
        <div
          className={theme === AppTheme.light ? styles.selectedTheme : ''}
          onClick={toggleAppTheme(AppTheme.light)}
        >
          Light
        </div>
      </div>
    </div>
  );
};

export default ThemeMenu;
