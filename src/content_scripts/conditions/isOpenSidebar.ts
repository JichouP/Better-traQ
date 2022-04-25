import selectors from '../selectors';

const isOpenSidebar = (): boolean => {
  const selector = selectors.sidebarOpener();
  if (!selector) return false;
  const sidebarOpener = document.querySelector(selector);
  return sidebarOpener === null;
};

export default isOpenSidebar;
