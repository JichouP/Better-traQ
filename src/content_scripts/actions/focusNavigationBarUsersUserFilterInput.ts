import selectors from '../selectors';

const focusNavigationBarUsersUserFilterInput = () => {
  const userFilterInputSelector = selectors.navigationBarUsersUserFilterInput();
  if (!userFilterInputSelector) return;
  document.querySelector<HTMLInputElement>(userFilterInputSelector)?.focus();
};

export default focusNavigationBarUsersUserFilterInput;
