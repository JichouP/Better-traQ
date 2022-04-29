import React, { FC } from 'react';
import Sidebar from './Sidebar';
// import ThemeToggleButton from './ThemeToggleButton';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
  <div className="flex flex-row">
    <Sidebar />
    <main id="main" className="w-full">
      <div
        id="content"
        className="flex flex-col justify-center h-screen max-h-screen"
      >
        {children}
      </div>
    </main>
  </div>
);
export default Layout;
