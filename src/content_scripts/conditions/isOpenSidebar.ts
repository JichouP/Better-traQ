import selectors from '../selectors';

const isOpenSidebar = (): boolean => {
  const openerSelector = selectors.sidebarOpener();
  if (!openerSelector) return false;
  const sidebarOpener = document.querySelector(openerSelector);
  return sidebarOpener === null;
};

export default isOpenSidebar;
