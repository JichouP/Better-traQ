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
      {/* <header id="header" className="navbar bg-base-200">
        <div className="navbar-start" />
        <div className="navbar-end">
          <div className="mr-2">
            <ThemeToggleButton />
          </div>
        </div>
      </header> */}
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
