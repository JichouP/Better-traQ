import selectors from '../selectors';
import { click } from './utils/dispatchEvent';

const cSidebarCloser = () => {
  const closerSelector = selectors.sidebarCloser();
  if (!closerSelector) return;
  const closerEl = document.querySelector<SVGElement>(closerSelector);
  if (!closerEl) return;
  click(closerEl);
};

export default cSidebarCloser;
