/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import setBackground from '@/content_scripts/setBackground';
import useStorage from '@/options/hooks/useStorage';

const BackgroundSetting = () => {
  const [storage, fetchStorage, setStorage] = useStorage();
  const [url, setUrl] = useState<string>('');
  const [filter, setFilter] = useState('');

  const clickUpdate = () => {
    setStorage({
      background: { backgroundUrl: url, backgroundFilter: filter },
    });
  };
  const clickCancel = () => {
    setUrl(storage?.background?.backgroundUrl ?? '');
    setFilter(storage?.background?.backgroundFilter ?? '');
  };

  useEffect(() => {
    fetchStorage();
  }, []);

  useEffect(() => {
    setUrl(storage?.background?.backgroundUrl ?? '');
    setFilter(storage?.background?.backgroundFilter ?? '');
  }, [storage]);

  return (
    <>
      <h1 className="text-2xl font-bold">背景の設定</h1>
      <div className="w-full form-control">
        <div className="mx-12 mt-2">
          <label className="label">
            <span className="label-text">背景URL</span>
          </label>
          <input
            className="w-full input input-bordered input-sm"
            placeholder="背景URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="mx-12 mt-4">
          <label className="label">
            <span className="label-text">
              背景フィルター&emsp;&emsp;&emsp;&emsp;設定例:{' '}
              <code className="select-text cursor-text">
                rgba(255, 255, 255, 0.8)
              </code>
              &emsp;
              <code className="select-text cursor-text">
                rgba(36, 43, 51, 0.8)
              </code>
            </span>
          </label>
          <input
            className="w-full input input-bordered input-sm"
            placeholder="背景フィルター"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-4 ml-8">
        <span className="mr-4 text-base">プレビュー</span>
        <div className="flex flex-col w-[40rem] mx-auto">
          <div
            className="w-[40rem] h-[26rem] mx-auto mt-4 artboard artboard-demo"
            style={{
              background: `center/cover url(${url})`,
            }}
          >
            <div
              className="w-[40rem] h-[26rem] artboard artboard-demo"
              style={{
                background: filter,
              }}
            />
          </div>
          <div className="flex w-[40rem] mt-4">
            <button
              type="button"
              className="flex-1 text-base font-normal btn btn-primary btn-outline"
              onClick={clickCancel}
            >
              キャンセル
            </button>
            <button
              type="button"
              className="flex-1 ml-4 text-base font-normal btn btn-primary"
              onClick={clickUpdate}
            >
              更新（リロード後反映）
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundSetting;
