import React from 'react';
import { useRecoilState } from 'recoil';
import BookIcon from '../icons/BookIcon';
import HomeIcon from '../icons/HomeIcon';
import Logo from '../icons/Logo';
import SettingIcon from '../icons/SettingIcon';
import pageState from '../states/pageState';
import ThemeToggleButton from './ThemeToggleButton';

const onKeyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
  if (e.key === 'Enter') {
    e.currentTarget.click();
  }
};

const Sidebar = () => {
  const [page, setPage] = useRecoilState(pageState);
  return (
    <aside
      id="sidebar"
      className="flex flex-col justify-between h-screen bg-base-300 w-96"
    >
      <div className="flex flex-col justify-start">
        <header className="justify-center navbar">
          <div
            role="button"
            onClick={() => setPage('home')}
            tabIndex={-1}
            onKeyDown={onKeyDownHandler}
          >
            <Logo className="w-48 fill-primary" />
            <code className="self-end mb-1 ml-3 opacity-70">
              v{process.env.VERSION}
            </code>
          </div>
        </header>
        <div className="h-0 m-0 divider" />
        <div>
          <ul className="w-full p-2 text-lg menu rounded-box">
            <li className="pb-1">
              <div
                role="button"
                className={page === 'home' ? 'active' : ''}
                onClick={() => setPage('home')}
                tabIndex={0}
                onKeyDown={onKeyDownHandler}
              >
                <HomeIcon className="w-6" />
                Home
              </div>
            </li>
            <li className="pb-1">
              <div
                role="button"
                className={page === 'docs' ? 'active' : ''}
                onClick={() => setPage('docs')}
                tabIndex={0}
                onKeyDown={onKeyDownHandler}
              >
                <BookIcon className="w-6" />
                Document
              </div>
            </li>
            <li className="pb-1">
              <div
                role="button"
                className={page === 'setting' ? 'active' : ''}
                onClick={() => setPage('setting')}
                tabIndex={0}
                onKeyDown={onKeyDownHandler}
              >
                <SettingIcon className="w-6" />
                Setting
              </div>
            </li>
          </ul>
        </div>
      </div>
      <footer className="h-16 cursor-default footer footer-center opacity-70">
        <span className="inline-block">
          Made with{' '}
          <span className="inline-block text-red-500 hover:animate-bounce">
            ❤
          </span>{' '}
          by JichouP
        </span>
      </footer>
    </aside>
  );
};

export default Sidebar;
