import React from 'react';
import BackgroundSetting from '../components/Setting/BackgroundSetting';
import BetterTraQSetting from '@/options/components/Setting/BetterTraQSetting';
import CurrentKeybinds from '@/options/components/Setting/CurrentKeybinds';
import TaskSettings from '@/options/components/Setting/TaskSettings';
import WorkInProgress from '@/options/components/Setting/WorkInProgress';

const Setting = () => (
  <div className="flex flex-col items-center h-full overflow-y-scroll">
    <div className="w-[48rem] mt-8 mb-16">
      <div className="mt-8 mb-8">
        <h1 className="text-4xl font-bold">設定</h1>
      </div>
      <WorkInProgress />
      <div className="mt-12 mb-12">
        <BetterTraQSetting />
      </div>
      <div className="mt-12 mb-12">
        <BackgroundSetting />
      </div>
      <div className="mt-12 mb-12">
        <TaskSettings />
      </div>
      <div className="mt-12 mb-12">
        <CurrentKeybinds />
      </div>
    </div>
  </div>
);

export default Setting;
