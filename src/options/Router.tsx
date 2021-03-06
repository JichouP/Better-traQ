import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import Layout from './components/Layout';
import Changelog from './pages/Changelog';
import Docs from './pages/Docs';
import Home from './pages/Home';
import Setting from './pages/Setting';
import pageState from './states/pageState';

const Router: FC = () => {
  const [page] = useRecoilState(pageState);
  return (
    <Layout>
      {(() => {
        switch (page) {
          case 'home':
            return <Home />;
          case 'docs':
            return <Docs />;
          case 'setting':
            return <Setting />;
          case 'changelog':
            return <Changelog />;
        }
      })()}
    </Layout>
  );
};

export default Router;
