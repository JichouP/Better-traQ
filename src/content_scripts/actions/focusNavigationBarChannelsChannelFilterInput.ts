import selectors from '../selectors';

const focusNavigationBarChannelsChannelFilterInput = () => {
  const selector = selectors.navigationBarChannelsChannelFilterInput();
  if (!selector) return;
  document.querySelector<HTMLInputElement>(selector)?.focus();
};

export default focusNavigationBarChannelsChannelFilterInput;
