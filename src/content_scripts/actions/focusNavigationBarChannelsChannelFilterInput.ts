import selectors from '../selectors';

const focusNavigationBarChannelsChannelFilterInput = () => {
  const channelFilterInputSelector =
    selectors.navigationBarChannelsChannelFilterInput();
  if (!channelFilterInputSelector) return;
  document.querySelector<HTMLInputElement>(channelFilterInputSelector)?.focus();
};

export default focusNavigationBarChannelsChannelFilterInput;
