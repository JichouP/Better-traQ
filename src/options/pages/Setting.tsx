import React from 'react';
import Task from '@/options/components/Setting/Task';
import ThemeToggleButton from '@/options/components/Setting/ThemeToggleButton';

const Setting = () => (
  <div className="flex flex-col items-center overflow-y-scroll">
    <div className="w-[48rem] mt-8 mb-16">
      <div className="ml-auto mr-auto shadow-lg alert alert-info w-fit">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="flex-shrink-0 w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-base">
            キーバインド設定は仮実装です。手伝ってくれる方は{' '}
            <code>#gps/times/JichouP</code> まで
          </span>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl">Better traQ の設定</h1>
        <div className="flex flex-row items-center mt-4 mb-4 ml-8">
          <span className="mr-4 text-base">テーマ切り替え</span>
          <ThemeToggleButton />
        </div>
      </div>
      <div className="mt-4 mb-4">
        <h1 className="text-2xl">現在のキーバインド一覧</h1>
      </div>
      <div className="mb-4">
        <Task />
      </div>
    </div>
  </div>
);

export default Setting;
