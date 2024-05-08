import selectors from '../selectors';
import { click } from './utils/dispatchEvent';

const cNHTopUnreadCh = () => {
  const unreadChSelector = selectors.navigationBarHomeTopUnreadCh();
  if (!unreadChSelector) return;
  const unreadChlEl = document.querySelector<HTMLDivElement>(unreadChSelector);
  if (!unreadChlEl) return;
  click(unreadChlEl);
};

export default cNHTopUnreadCh;
