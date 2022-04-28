import React, { FC, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import themeState from './states/themeState';
import setDataThemeAttr from './utils/setDataThemeAttr';

type Props = {
  children: React.ReactNode;
};

const ThemeInitializer: FC<Props> = ({ children }) => {
  const [theme] = useRecoilState(themeState);
  useEffect(() => {
    setDataThemeAttr(theme);
  }, []);
  return <div>{children}</div>;
};

export default ThemeInitializer;
