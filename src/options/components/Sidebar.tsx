import React from 'react';
import { useRecoilState } from 'recoil';
import Logo from '../icons/Logo';
import pageState from '../states/pageState';

const onKeyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
  if (e.key === 'Enter') {
    e.currentTarget.click();
  }
};

const Sidebar = () => {
  const [page, setPage] = useRecoilState(pageState);
  return (
    <aside id="sidebar" className="h-screen bg-base-300 w-96">
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
        <ul className="w-full p-2 text-base menu rounded-box">
          <li className="pb-1">
            <div
              role="button"
              className={page === 'home' ? 'active' : ''}
              onClick={() => setPage('home')}
              tabIndex={0}
              onKeyDown={onKeyDownHandler}
            >
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
              Setting
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
