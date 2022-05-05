import selectors from '../selectors';

const cNavigationSelectorActivityTab = () => {
  const activityTabSelector = selectors.navigationSelectorActivityTab();
  if (!activityTabSelector) return;
  document.querySelector<HTMLDivElement>(activityTabSelector)?.click();
};

export default cNavigationSelectorActivityTab;
