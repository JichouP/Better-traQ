import selectors from '../selectors';

const sNCToCurrentChannel = () => {
  const currentChannelSelector =
    selectors.navigationBarChannelsChannelCurrentChannel();
  if (!currentChannelSelector) return;
  const currentChannel = document.querySelector<HTMLDivElement>(
    currentChannelSelector
  );
  if (!currentChannel) return;
  currentChannel.scrollIntoView({ behavior: 'auto', block: 'center' });
};

export default sNCToCurrentChannel;
