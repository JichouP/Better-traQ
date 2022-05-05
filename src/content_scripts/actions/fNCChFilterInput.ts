import selectors from '../selectors';

const fNCChFilterInput = () => {
  const channelFilterInputSelector =
    selectors.navigationBarChannelsChannelFilterInput();
  if (!channelFilterInputSelector) return;
  document.querySelector<HTMLInputElement>(channelFilterInputSelector)?.focus();
};

export default fNCChFilterInput;
