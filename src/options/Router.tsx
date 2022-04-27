import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import Layout from './components/Layout';
import About from './pages/About';
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
          case 'about':
            return <About />;
        }
      })()}
    </Layout>
  );
};

export default Router;
