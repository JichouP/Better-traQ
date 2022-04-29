import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import storageState from '../states/storageState';
import { get, update, Storage } from '@/store/Storage';

const useStorage = (): [
  Storage | null,
  () => Promise<void>,
  (data: Partial<Storage>) => Promise<void>
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
    },
    [state]
  );

  return [state, fetch, set];
};

export default useStorage;
