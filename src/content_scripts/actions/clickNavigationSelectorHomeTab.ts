import selectors from '../selectors';

const clickNavigationSelectorHomeTab = () => {
  const selector = selectors.navigationSelectorHomeTab();
  if (!selector) return;
  const el = document.querySelector<HTMLDivElement>(selector);
  if (!el) return;
  el.click();
};

export default clickNavigationSelectorHomeTab;
