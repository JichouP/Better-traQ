import selectors from '../selectors';

const fNavigationBarChannelsChannelFilterInput = () => {
  const channelFilterInputSelector =
    selectors.navigationBarChannelsChannelFilterInput();
  if (!channelFilterInputSelector) return;
  document.querySelector<HTMLInputElement>(channelFilterInputSelector)?.focus();
};

export default fNavigationBarChannelsChannelFilterInput;
