import selectors from '../selectors';

const cTHTab = () => {
  const homeTabSelector = selectors.thTab();
  if (!homeTabSelector) return;
  document.querySelector<HTMLDivElement>(homeTabSelector)?.click();
};

export default cTHTab;
