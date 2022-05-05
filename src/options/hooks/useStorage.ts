import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import storageState from '../states/storageState';
import { get, update, Storage, clear } from '@/store/Storage';

const useStorage = (): [
  Storage | null,
  () => Promise<void>,
  (data: Partial<Storage>) => Promise<void>,
  () => Promise<void>
] => {
  const [state, setState] = useRecoilState(storageState);
  const fetch = async (): Promise<void> => {
    const data = await get();
    setState(data);
  };
  const set = useCallback(
    async (newData: Partial<Storage>): Promise<void> => {
      const data = await get();
      await update({ ...data, ...newData });
      fetch();
    },
    [state]
  );

  useEffect(() => {
    fetch();
  }, []);

  return [state, fetch, set, clear];
};

export default useStorage;
