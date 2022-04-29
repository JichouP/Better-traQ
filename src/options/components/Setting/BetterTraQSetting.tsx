import React, { useEffect } from 'react';
import OnOffButton from './OnOffButton';
import ThemeToggleButton from './ThemeToggleButton';
import useStorage from '@/options/hooks/useStorage';
import useStorageSetting from '@/options/hooks/useStorageSetting';

const BetterTraQSetting = () => {
  const [storageSetting, fetchStorageSetting, setStorageSetting] =
    useStorageSetting();
  const [, fetchStorage] = useStorage();

  useEffect(() => {
    fetchStorageSetting();
  }, []);

  useEffect(() => {
    fetchStorage();
  }, [storageSetting]);

  const onClick = () => {
    if (storageSetting?.isSettingSync) {
      setStorageSetting({ isSettingSync: false });
    } else {
      setStorageSetting({ isSettingSync: true });
    }
  };

  return (
    <>
      <h1 className="text-2xl">Better traQ の設定</h1>
      <div className="flex flex-row items-center mt-4 ml-8">
        <span className="mr-4 text-base">テーマ切り替え</span>
        <ThemeToggleButton />
      </div>
      <div className="flex flex-row items-center mt-4 ml-8">
        <span className="mr-4 text-base">ストレージの切り替え</span>
        <OnOffButton
          isActive={storageSetting?.isSettingSync ?? true}
          onClick={onClick}
        />
      </div>
    </>
  );
};

export default BetterTraQSetting;
