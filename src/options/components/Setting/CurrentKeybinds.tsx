import React from 'react';
import Task from './Task';

const CurrentKeybinds = () => (
  <>
    <div>
      <h1 className="text-2xl">現在のキーバインド一覧</h1>
    </div>
    <div className="mt-4">
      <Task />
    </div>
  </>
);

export default CurrentKeybinds;
