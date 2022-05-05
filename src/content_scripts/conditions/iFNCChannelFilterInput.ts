import selectors from '../selectors';

const iFNCChannelFilterInput = (): boolean => {
  const { activeElement } = document;
  if (!activeElement) return false;
  const channelFilterSelector =
    selectors.navigationBarChannelsChannelFilterInput();
  if (!channelFilterSelector) return false;
  const channelFilter = document.querySelector<HTMLInputElement>(
    channelFilterSelector
  );
  if (!channelFilter) return false;
  return channelFilter === activeElement;
};

export default iFNCChannelFilterInput;
