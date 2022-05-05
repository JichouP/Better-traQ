import selectors from '../selectors';

const cNavigationSelectorClipTab = () => {
  const clipTabSelector = selectors.navigationSelectorClipTab();
  if (!clipTabSelector) return;
  document.querySelector<HTMLDivElement>(clipTabSelector)?.click();
};

export default cNavigationSelectorClipTab;
