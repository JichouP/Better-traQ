import getChList from './getChList';

const getIndexOfCurrentCh = (): number | undefined => {
  const channelList = getChList();
  if (!channelList) return;
  return [...channelList].findIndex(
    (channel) => channel.getAttribute('aria-selected') === 'true'
  );
};
export default getIndexOfCurrentCh;
