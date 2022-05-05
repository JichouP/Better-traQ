import selectors from '../selectors';

const cTATab = () => {
  const activityTabSelector = selectors.navigationSelectorActivityTab();
  if (!activityTabSelector) return;
  document.querySelector<HTMLDivElement>(activityTabSelector)?.click();
};

export default cTATab;
