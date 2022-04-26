import { clickHash } from './utils/dispatchEvent';
import getChannelList from './utils/getChannelList';
import getIndexOfCurrentChannel from './utils/getIndexOfCurrentChannel';

const clickNavigationBarChannelsChannelCurrentChannelHash = () => {
  const channelList = getChannelList();
  if (!channelList) return;
  const currentChannelIndex = getIndexOfCurrentChannel();
  if (currentChannelIndex === undefined) return;
  const targetElementContainer = channelList[currentChannelIndex];
  if (!targetElementContainer) return;
  const targetElement = targetElementContainer.querySelector<HTMLDivElement>(
    ':scope > div:nth-child(1) > div:nth-child(1)'
  );
  if (!targetElement) return;
  clickHash(targetElement);
};

export default clickNavigationBarChannelsChannelCurrentChannelHash;
