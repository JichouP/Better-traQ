import selectors from '../selectors';

const clickNavigationSelectorHomeTab = () => {
  const homeTabSelector = selectors.navigationSelectorHomeTab();
  if (!homeTabSelector) return;
  document.querySelector<HTMLDivElement>(homeTabSelector)?.click();
};

export default clickNavigationSelectorHomeTab;
