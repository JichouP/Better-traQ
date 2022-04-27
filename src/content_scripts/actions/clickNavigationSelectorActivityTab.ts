import selectors from '../selectors';

const clickNavigationSelectorActivityTab = () => {
  const activityTabSelector = selectors.navigationSelectorActivityTab();
  if (!activityTabSelector) return;
  document.querySelector<HTMLDivElement>(activityTabSelector)?.click();
};

export default clickNavigationSelectorActivityTab;
