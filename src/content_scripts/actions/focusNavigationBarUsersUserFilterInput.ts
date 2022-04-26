import selectors from '../selectors';

const focusNavigationBarUsersUserFilterInput = () => {
  const selector = selectors.navigationBarUsersUserFilterInput();
  if (!selector) return;
  const el = document.querySelector<HTMLInputElement>(selector);
  if (!el) return;
  el.focus();
};

export default focusNavigationBarUsersUserFilterInput;
