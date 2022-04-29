import { atom } from 'recoil';
import { Storage } from '@/store/Storage';

const storageState = atom<Storage | null>({
  key: 'storage',
  default: null,
});

export default storageState;
