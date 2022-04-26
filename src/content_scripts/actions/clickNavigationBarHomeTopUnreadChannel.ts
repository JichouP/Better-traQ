import selectors from '../selectors';
import { mousedown } from './utils/dispatchEvent';

const clickNavigationBarHomeTopUnreadChannel = () => {
  const selector = selectors.navigationBarHomeTopUnreadChannel();
  if (!selector) return;
  const el = document.querySelector<HTMLDivElement>(selector);
  if (!el) return;
  mousedown(el);
};

export default clickNavigationBarHomeTopUnreadChannel;
