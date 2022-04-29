import React from 'react';
import BetterTraQSetting from '@/options/components/Setting/BetterTraQSetting';
import CurrentKeybinds from '@/options/components/Setting/CurrentKeybinds';
import TaskSettings from '@/options/components/Setting/TaskSettings';
import WorkInProgress from '@/options/components/Setting/WorkInProgress';

const Setting = () => (
  <div className="flex flex-col items-center overflow-y-scroll">
    <div className="w-[48rem] mt-8 mb-16">
      <div className="mt-8 mb-8">
        <h1 className="text-4xl">設定</h1>
      </div>
      <WorkInProgress />
      <div className="mt-8 mb-8">
        <BetterTraQSetting />
      </div>
      <div className="mt-8 mb-8">
        <TaskSettings />
      </div>
      <div className="mt-8 mb-8">
        <CurrentKeybinds />
      </div>
    </div>
  </div>
);

export default Setting;
