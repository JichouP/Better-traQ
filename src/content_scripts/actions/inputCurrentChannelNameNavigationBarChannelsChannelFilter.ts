import selectors from '../selectors';
import getCurrentChannelNames from './utils/getCurrentChannelNames';

const inputCurrentChannelNameNavigationBarChannelsChannelFilter = () => {
  const channelFilterInputSelector =
    selectors.navigationBarChannelsChannelFilterInput();
  if (!channelFilterInputSelector) return;
  const channelFilterInputEl = document.querySelector<HTMLInputElement>(
    channelFilterInputSelector
  );
  if (!channelFilterInputEl) return;
  const currentChannelNames = getCurrentChannelNames();
  if (!currentChannelNames) return;
  channelFilterInputEl.value = `${currentChannelNames.join('/')}/`;
};

export default inputCurrentChannelNameNavigationBarChannelsChannelFilter;
