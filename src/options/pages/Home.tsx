import React from 'react';
import { useRecoilState } from 'recoil';
import BookIcon from '@/options/icons/BookIcon';
import Logo from '@/options/icons/Logo';
import SettingIcon from '@/options/icons/SettingIcon';
import pageState from '@/options/states/pageState';

const Home = () => {
  const [, setPage] = useRecoilState(pageState);
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
              className="w-48 text-base normal-case btn btn-primary"
              tabIndex={0}
              onClick={() => {
                setPage('docs');
              }}
            >
              <BookIcon className="w-6" />{' '}
              <span className="ml-1 font-normal">ドキュメント</span>
            </button>
            <button
              type="button"
              className="w-48 ml-8 text-base normal-case btn btn-primary btn-outline"
              tabIndex={0}
              onClick={() => {
                setPage('setting');
              }}
            >
              <SettingIcon className="w-6" />{' '}
              <span className="ml-1 font-normal">設定</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
