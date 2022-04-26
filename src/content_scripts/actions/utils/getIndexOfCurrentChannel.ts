import getChannelList from './getChannelList';

const getIndexOfCurrentChannel = (): number | undefined => {
  const channelList = getChannelList();
  if (!channelList) return;
  return [...channelList].findIndex(
    (channel) => channel.getAttribute('aria-selected') === 'true'
  );
};
export default getIndexOfCurrentChannel;
