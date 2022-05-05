import selectors from '../selectors';

const cTUTab = () => {
  const usersTabSelector = selectors.navigationSelectorUsersTab();
  if (!usersTabSelector) return;
  document.querySelector<HTMLDivElement>(usersTabSelector)?.click();
};

export default cTUTab;
