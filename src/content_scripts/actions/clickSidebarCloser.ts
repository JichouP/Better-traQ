import selectors from '../selectors';
import { click } from './utils/dispatchEvent';

const clickSidebarCloser = () => {
  const selector = selectors.sidebarCloser();
  if (!selector) return;
  const el = document.querySelector<SVGElement>(selector);
  if (!el) return;
  click(el);
};

export default clickSidebarCloser;
