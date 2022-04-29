import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import storageSettingState from '../states/storageSettingState';
import { get, update, StorageSetting } from '@/store/StorageSetting';

const useStorageSetting = (): [
  StorageSetting | null,
  () => Promise<void>,
  (data: Partial<StorageSetting>) => Promise<void>
] => {
  const [state, setState] = useRecoilState(storageSettingState);
  const fetch = async (): Promise<void> => {
    const data = await get();
    setState(data);
  };
  const set = useCallback(
    async (newData: Partial<StorageSetting>): Promise<void> => {
      const data = await get();
      await update({ ...data, ...newData });
      fetch();
    },
    [state]
  );

  useEffect(() => {
    fetch();
  }, []);

  return [state, fetch, set];
};

export default useStorageSetting;
