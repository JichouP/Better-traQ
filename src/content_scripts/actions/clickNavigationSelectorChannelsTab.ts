import selectors from '../selectors';

const clickNavigationSelectorChannelsTab = () => {
  const selector = selectors.navigationSelectorChannelsTab();
  if (!selector) return;
  const el = document.querySelector<HTMLDivElement>(selector);
  if (!el) return;
  el.click();
};

export default clickNavigationSelectorChannelsTab;
