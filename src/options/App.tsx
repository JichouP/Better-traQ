import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import Router from './Router';

const App: FC = () => (
  <RecoilRoot>
    <Router />
  </RecoilRoot>
);

export default App;
