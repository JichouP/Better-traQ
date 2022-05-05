import selectors from '../selectors';

const cTATab = () => {
  const activityTabSelector = selectors.taTab();
  if (!activityTabSelector) return;
  document.querySelector<HTMLDivElement>(activityTabSelector)?.click();
};

export default cTATab;
