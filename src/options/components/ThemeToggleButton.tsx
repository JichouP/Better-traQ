import React from 'react';
import { useRecoilState } from 'recoil';
import themeState from '../states/themeState';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <button type="button" className="btn btn-primary" onClick={toggleTheme}>
      Toggle
    </button>
  );
};

export default ThemeToggleButton;
