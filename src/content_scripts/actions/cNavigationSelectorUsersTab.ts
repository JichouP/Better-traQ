import selectors from '../selectors';

const cNavigationSelectorUsersTab = () => {
  const usersTabSelector = selectors.navigationSelectorUsersTab();
  if (!usersTabSelector) return;
  document.querySelector<HTMLDivElement>(usersTabSelector)?.click();
};

export default cNavigationSelectorUsersTab;
