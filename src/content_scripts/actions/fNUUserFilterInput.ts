import selectors from '../selectors';

const fNUUserFilterInput = () => {
  const userFilterInputSelector = selectors.navigationBarUsersUserFilterInput();
  if (!userFilterInputSelector) return;
  document.querySelector<HTMLInputElement>(userFilterInputSelector)?.focus();
};

export default fNUUserFilterInput;
