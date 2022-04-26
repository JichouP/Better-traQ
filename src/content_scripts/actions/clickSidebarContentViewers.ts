import selectors from '../selectors';

const clickSidebarContentViewers = () => {
  const selector = selectors.sidebarContentViewers();
  if (!selector) return;
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return;
  el.click();
};

export default clickSidebarContentViewers;
