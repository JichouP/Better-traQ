import React from 'react';
import Logo from '../icons/Logo';

const Home = () => (
  <div className="hero">
    <div className="text-center hero-content">
      <div className="max-w-4xl">
        <Logo id="logo" className="fill-primary" />
        <div>
          <p className="py-6 text-xl">
            Better traQ は traQ
            をキーボードのみで操作することを目指して作られた拡張機能です
          </p>
        </div>
        <div className="">
          <button
            type="button"
            className="w-32 text-base normal-case btn btn-primary"
            tabIndex={0}
          >
            Document
          </button>
          <button
            type="button"
            className="w-32 ml-8 text-base normal-case btn btn-primary btn-outline"
            tabIndex={0}
          >
            Setting
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
