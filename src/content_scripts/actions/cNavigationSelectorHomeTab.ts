import selectors from '../selectors';

const cNavigationSelectorHomeTab = () => {
  const homeTabSelector = selectors.navigationSelectorHomeTab();
  if (!homeTabSelector) return;
  document.querySelector<HTMLDivElement>(homeTabSelector)?.click();
};

export default cNavigationSelectorHomeTab;
