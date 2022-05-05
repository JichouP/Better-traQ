import selectors from '../selectors';
import { mousedown } from './utils/dispatchEvent';

const cNHTopUnreadCh = () => {
  const unreadChSelector = selectors.navigationBarHomeTopUnreadCh();
  if (!unreadChSelector) return;
  const unreadChlEl = document.querySelector<HTMLDivElement>(unreadChSelector);
  if (!unreadChlEl) return;
  mousedown(unreadChlEl);
};

export default cNHTopUnreadCh;
