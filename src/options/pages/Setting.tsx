import React from 'react';
import BetterTraQSetting from '@/options/components/Setting/BetterTraQSetting';
import CurrentKeybinds from '@/options/components/Setting/CurrentKeybinds';
import KeybindSettings from '@/options/components/Setting/KeybindSettings';
import WorkInProgress from '@/options/components/Setting/WorkInProgress';

const Setting = () => (
  <div className="flex flex-col items-center overflow-y-scroll">
    <div className="w-[48rem] mt-8 mb-16">
      <WorkInProgress />
      <div className="mt-8 mb-8">
        <BetterTraQSetting />
      </div>
      <div className="mt-8 mb-8">
        <CurrentKeybinds />
      </div>
      <div className="mt-8 mb-8">
        <KeybindSettings />
      </div>
    </div>
  </div>
);

export default Setting;
