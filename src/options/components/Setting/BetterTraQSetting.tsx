/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import OnOffButton from './OnOffButton';
import ThemeToggleButton from './ThemeToggleButton';
import useStorage from '@/options/hooks/useStorage';
import useStorageSetting from '@/options/hooks/useStorageSetting';
import onKeyDownHandler from '@/options/utils/onKeyDownHandler';

const BetterTraQSetting = () => {
  const [storageSetting, fetchStorageSetting, setStorageSetting] =
    useStorageSetting();
  const [, fetchStorage, , clear] = useStorage();

  useEffect(() => {
    fetchStorageSetting();
  }, []);

  useEffect(() => {
    fetchStorage();
  }, [storageSetting]);

  const onClickSwitchStorage = () => {
    if (storageSetting?.isSettingSync) {
      setStorageSetting({ isSettingSync: false });
    } else {
      setStorageSetting({ isSettingSync: true });
    }
  };

  const onClickClearStorage = () => {
    clear();
  };

  return (
    <>
      <h1 className="text-2xl font-bold">Better traQ の設定</h1>
      <div className="flex flex-row items-center mt-4 ml-8">
        <span className="mr-4 text-base">テーマ切り替え</span>
        <ThemeToggleButton />
      </div>
      <div className="flex flex-row items-center mt-4 ml-8">
        <span className="mr-4 text-base">syncストレージの切り替え</span>
        <OnOffButton
          isActive={storageSetting?.isSettingSync ?? true}
          onClick={onClickSwitchStorage}
        />
      </div>
      <div className="mt-4 ml-8">
        <label
          htmlFor="initializeButton"
          className="flex-1 text-base font-normal btn modal-button btn-primary btn-outline"
        >
          ストレージを初期化
        </label>

        <input type="checkbox" id="initializeButton" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <p className="py-4 text-lg">
              すべての設定を削除します。初期設定を復元するにはtraQを開いてリロードをしてください。
              <br />
              ストレージを初期化しますか？
            </p>
            <div className="modal-action">
              <label
                htmlFor="initializeButton"
                className="text-base font-normal btn btn-primary btn-outline"
              >
                キャンセル
              </label>
              <label
                htmlFor="initializeButton"
                className="text-base font-normal btn btn-primary"
                onClick={onClickClearStorage}
                onKeyDown={onKeyDownHandler}
              >
                ストレージを初期化
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BetterTraQSetting;
