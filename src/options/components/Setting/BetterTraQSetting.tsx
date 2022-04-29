import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';

const BetterTraQSetting = () => (
  <>
    <h1 className="text-2xl">Better traQ の設定</h1>
    <div className="flex flex-row items-center mt-4 mb-4 ml-8">
      <span className="mr-4 text-base">テーマ切り替え</span>
      <ThemeToggleButton />
    </div>
  </>
);

export default BetterTraQSetting;
