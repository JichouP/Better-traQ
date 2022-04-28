import { useState } from 'react';
import { get } from '@/store/Storage';

const useStore = (): [Task[] | null, () => void] => {
  const [state, setState] = useState<Task[] | null>(null);
  const fetch = async () => {
    const data = await get();
    setState(data.task);
  };

  return [state, fetch];
};

export default useStore;
