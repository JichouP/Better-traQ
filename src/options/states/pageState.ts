import { atom } from 'recoil';

const pageState = atom<Page>({
  key: 'page',
  default: 'setting',
});

export default pageState;
