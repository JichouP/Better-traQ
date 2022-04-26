import selectors from '../selectors';
import { click } from './utils/dispatchEvent';

const clickSidebarOpener = () => {
  const selector = selectors.sidebarOpener();
  if (!selector) return;
  const el = document.querySelector<SVGElement>(selector);
  if (!el) return;
  click(el);
};

export default clickSidebarOpener;
