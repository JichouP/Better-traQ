import selectors from '../selectors';
import { click } from './utils/dispatchEvent';

const cSidebarOpener = () => {
  const openerSelector = selectors.sidebarOpener();
  if (!openerSelector) return;
  const openerEl = document.querySelector<SVGElement>(openerSelector);
  if (!openerEl) return;
  click(openerEl);
};

export default cSidebarOpener;
