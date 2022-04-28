import { atom } from 'recoil';
import setDataThemeAttr from '@/options/utils/setDataThemeAttr';

const themeState = atom<Theme>({
  key: 'theme',
  default: localStorage.getItem('theme') === 'light' ? 'light' : 'dark',
  effects: [
    ({ onSet }) => {
      onSet((newTheme: Theme) => {
        setDataThemeAttr(newTheme);
        localStorage.setItem('theme', newTheme);
      });
    },
  ],
});

export default themeState;
