import selectors from '../selectors';

const clickNavigationSelectorClipTab = () => {
  const clipTabSelector = selectors.navigationSelectorClipTab();
  if (!clipTabSelector) return;
  document.querySelector<HTMLDivElement>(clipTabSelector)?.click();
};

export default clickNavigationSelectorClipTab;
