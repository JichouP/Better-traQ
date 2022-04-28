import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import Layout from './components/Layout';
import Docs from './pages/Docs';
import Home from './pages/Home';
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
        }
      })()}
    </Layout>
  );
};

export default Router;
