import selectors from '../selectors';
import { mousedown } from './utils/dispatchEvent';

const cNHBottomUnreadCh = () => {
  const unreadChSelector = selectors.navigationBarHomeBottomUnreadCh();
  if (!unreadChSelector) return;
  const unreadChEl = document.querySelector<HTMLDivElement>(unreadChSelector);
  if (!unreadChEl) return;
  mousedown(unreadChEl);
};

export default cNHBottomUnreadCh;
