import { atom } from 'recoil';
import { StorageSetting } from '@/store/StorageSetting';

const storageSettingState = atom<StorageSetting | null>({
  key: 'storageSetting',
  default: null,
});

export default storageSettingState;
