import selectors from '../selectors';
import { mousedown } from './utils/dispatchEvent';

const clickNavigationBarHomeHomeChannel = () => {
  const selector = selectors.navigationBarHomeHomeChannel();
  if (!selector) return;
  const el = document.querySelector<HTMLDivElement>(selector);
  if (!el) return;
  mousedown(el);
};

export default clickNavigationBarHomeHomeChannel;
