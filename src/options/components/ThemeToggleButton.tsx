import React from 'react';
import { useRecoilState } from 'recoil';
import Moon from '../icons/Moon';
import Sun from '../icons/Sun';
import themeState from '../states/themeState';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <button
      type="button"
      className="btn btn-circle btn-ghost"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggleButton;
