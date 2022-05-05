import selectors from '../selectors';

const fNavigationBarUsersUserFilterInput = () => {
  const userFilterInputSelector = selectors.navigationBarUsersUserFilterInput();
  if (!userFilterInputSelector) return;
  document.querySelector<HTMLInputElement>(userFilterInputSelector)?.focus();
};

export default fNavigationBarUsersUserFilterInput;
