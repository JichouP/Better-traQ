import { useState } from 'react';
import { get, Storage } from '@/store/Storage';

const useStorage = (): [Storage | null, () => Promise<void>] => {
  const [state, setState] = useState<Storage | null>(null);
  const fetch = async () => {
    const data = await get();
    setState(data);
  };

  return [state, fetch];
};

export default useStorage;
