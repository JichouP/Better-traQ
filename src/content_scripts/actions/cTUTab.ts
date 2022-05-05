import selectors from '../selectors';

const cTUTab = () => {
  const usersTabSelector = selectors.tuTab();
  if (!usersTabSelector) return;
  document.querySelector<HTMLDivElement>(usersTabSelector)?.click();
};

export default cTUTab;
