import selectors from '../selectors';

const fNCChannelFilterInput = () => {
  const channelFilterInputSelector =
    selectors.navigationBarChannelsChannelFilterInput();
  if (!channelFilterInputSelector) return;
  document.querySelector<HTMLInputElement>(channelFilterInputSelector)?.focus();
};

export default fNCChannelFilterInput;
