import selectors from '../selectors';
import { mousedown } from './utils/dispatchEvent';

const cNHHomeCh = () => {
  const homeChSelector = selectors.navigationBarHomeHomeChannel();
  if (!homeChSelector) return;
  const homeChEl = document.querySelector<HTMLDivElement>(homeChSelector);
  if (!homeChEl) return;
  mousedown(homeChEl);
};

export default cNHHomeCh;
