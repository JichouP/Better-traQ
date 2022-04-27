import { atom } from 'recoil';

const pageState = atom<Page>({
  key: 'page',
  default: 'home',
});

export default pageState;
