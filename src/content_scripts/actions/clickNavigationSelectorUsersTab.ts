import selectors from '../selectors';

const clickNavigationSelectorUsersTab = () => {
  const selector = selectors.navigationSelectorUsersTab();
  if (!selector) return;
  const el = document.querySelector<HTMLDivElement>(selector);
  if (!el) return;
  el.click();
};

export default clickNavigationSelectorUsersTab;
