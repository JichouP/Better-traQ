/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useRef } from 'react';
import defaultTasks from '@/content_scripts/default/task';
import useStorage from '@/options/hooks/useStorage';
import onKeyDownHandler from '@/options/utils/onKeyDownHandler';
import zTask from '@/store/zTask';

const TaskSettings = () => {
  const [taskString, setTaskString] = React.useState<string>('');
  const [isError, setIsError] = React.useState<boolean>(false);
  const [storage, fetchStorage, setStorage] = useStorage();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTaskString(e.target.value);
  };

  // define handlers
  const onClickUpdateHandler = useCallback(() => {
    const textareaValue = textareaRef.current?.value;
    if (!textareaValue) return;
    try {
      const newTask = JSON.parse(textareaValue);
      const parsedTask = zTask.parse(newTask);
      setIsError(false);
      setStorage({ task: parsedTask }).then(fetchStorage);
    } catch (e) {
      setIsError(true);
      console.error(e);
    }
  }, []);
  const onClickResetHandler = useCallback(() => {
    setIsError(false);
    setTaskString(JSON.stringify(storage?.task, null, 2));
  }, [storage]);
  const onClickResetDefaultHandler = useCallback(() => {
    setIsError(false);
    setTaskString(JSON.stringify(defaultTasks, null, 2));
    setStorage({ task: defaultTasks }).then(fetchStorage);
  }, []);

  useEffect(() => {
    fetchStorage();
  }, []);

  useEffect(() => {
    setTaskString(JSON.stringify(storage?.task, null, 2) || '');
  }, [storage]);

  return (
    <div>
      <h1 className="text-2xl font-bold">タスクの設定</h1>
      <div className="mt-4">
        <textarea
          className={`w-full h-96 leading-4 rounded-none font-mono textarea textarea-bordered ${
            isError ? 'textarea-error' : ''
          }`}
          onChange={onChangeHandler}
          value={taskString}
          ref={textareaRef}
        />
      </div>
      <div className="flex flex-row mt-4">
        <label
          htmlFor="my-modal"
          className="flex-1 text-base font-normal btn modal-button btn-primary btn-outline"
        >
          デフォルトに戻す
        </label>

        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <p className="py-4 text-lg">
              カスタマイズした設定が初期化されます
              <br />
              タスクの設定をデフォルトに戻しますか？
            </p>
            <div className="modal-action">
              <label
                htmlFor="my-modal"
                className="text-base font-normal btn btn-primary btn-outline"
              >
                キャンセル
              </label>
              <label
                htmlFor="my-modal"
                className="text-base font-normal btn btn-primary"
                onClick={onClickResetDefaultHandler}
                onKeyDown={onKeyDownHandler}
              >
                デフォルトに戻す
              </label>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="flex-1 ml-4 text-base font-normal btn btn-primary btn-outline"
          onClick={onClickResetHandler}
        >
          リセット
        </button>
        <button
          type="button"
          className="flex-1 ml-4 text-base font-normal btn btn-primary"
          onClick={onClickUpdateHandler}
        >
          更新
        </button>
      </div>
    </div>
  );
};

export default TaskSettings;
