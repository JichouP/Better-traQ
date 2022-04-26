import selectors from '../selectors';

const clickNavigationSelectorClipTab = () => {
  const selector = selectors.navigationSelectorClipTab();
  if (!selector) return;
  const el = document.querySelector<HTMLDivElement>(selector);
  if (!el) return;
  el.click();
};

export default clickNavigationSelectorClipTab;
