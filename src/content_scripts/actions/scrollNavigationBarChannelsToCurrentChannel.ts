import selectors from '../selectors';

const scrollNavigationBarChannelsToCurrentChannel = () => {
  const selector = selectors.navigationBarChannelsChannelCurrentChannel();
  if (!selector) return;
  const currentChannel = document.querySelector<HTMLDivElement>(selector);
  if (!currentChannel) return;
  currentChannel.scrollIntoView({ behavior: 'auto', block: 'center' });
};

export default scrollNavigationBarChannelsToCurrentChannel;
