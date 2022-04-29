import React from 'react';
import CurrentKeybindsTable from './CurrentKeybindsTable';

const CurrentKeybinds = () => (
  <>
    <div>
      <h1 className="text-2xl">現在のキーバインド一覧</h1>
    </div>
    <div className="mt-4">
      <CurrentKeybindsTable />
    </div>
  </>
);

export default CurrentKeybinds;
