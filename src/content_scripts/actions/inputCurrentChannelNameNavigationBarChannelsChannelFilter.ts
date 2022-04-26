import selectors from '../selectors';
import getCurrentChannelNames from './utils/getCurrentChannelNames';

const inputCurrentChannelNameNavigationBarChannelsChannelFilter = () => {
  const selector = selectors.navigationBarChannelsChannelFilterInput();
  if (!selector) return;
  const el = document.querySelector<HTMLInputElement>(selector);
  if (!el) return;
  const currentChannelNames = getCurrentChannelNames();
  if (!currentChannelNames) return;
  el.value = currentChannelNames.join('/');
};

export default inputCurrentChannelNameNavigationBarChannelsChannelFilter;
