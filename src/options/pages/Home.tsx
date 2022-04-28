import React from 'react';
import { useRecoilState } from 'recoil';
import BookIcon from '../icons/BookIcon';
import Logo from '../icons/Logo';
import SettingIcon from '../icons/SettingIcon';
import pageState from '../states/pageState';

const Home = () => {
  const [_, setPage] = useRecoilState(pageState);
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-4xl">
          <Logo className="fill-primary" />
          <div>
            <p className="py-6 text-xl">
              Better traQ は traQ
              をキーボードのみで操作することを目指して作られた拡張機能です
            </p>
          </div>
          <div className="">
            <button
              type="button"
              className="text-base normal-case w-36 btn btn-primary"
              tabIndex={0}
              onClick={() => {
                setPage('docs');
              }}
            >
              <BookIcon className="w-6" />{' '}
              <span className="ml-1">Document</span>
            </button>
            <button
              type="button"
              className="ml-8 text-base normal-case w-36 btn btn-primary btn-outline"
              tabIndex={0}
              onClick={() => {
                setPage('setting');
              }}
            >
              <SettingIcon className="w-6" />{' '}
              <span className="ml-1">Setting</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;