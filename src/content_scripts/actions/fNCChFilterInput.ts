import selectors from '../selectors';

const fNCChFilterInput = () => {
  const channelFilterInputSelector =
    selectors.navigationBarChannelsChFilterInput();
  if (!channelFilterInputSelector) return;
  document.querySelector<HTMLInputElement>(channelFilterInputSelector)?.focus();
};

export default fNCChFilterInput;
