import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import Router from './Router';
import ThemeInitializer from './ThemeInitializer';

const App: FC = () => (
  <RecoilRoot>
    <ThemeInitializer>
      <Router />
    </ThemeInitializer>
  </RecoilRoot>
);

export default App;
