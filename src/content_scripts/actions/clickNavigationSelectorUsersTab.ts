import selectors from '../selectors';

const clickNavigationSelectorUsersTab = () => {
  const usersTabSelector = selectors.navigationSelectorUsersTab();
  if (!usersTabSelector) return;
  document.querySelector<HTMLDivElement>(usersTabSelector)?.click();
};

export default clickNavigationSelectorUsersTab;
