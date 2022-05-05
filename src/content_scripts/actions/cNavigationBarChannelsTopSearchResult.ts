import selectors from '../selectors';
import { mousedown } from './utils/dispatchEvent';

const cNavigationBarChannelsTopSearchResult = () => {
  const channelListSelector = selectors.navigationBarChannelsChannelList();
  if (!channelListSelector) return;
  const channelList = document.querySelector(channelListSelector);
  if (!channelList) return;
  const targetEl = channelList.querySelector<HTMLDivElement>(
    ':scope > div:nth-child(1) > div:nth-child(1)'
  );
  if (!targetEl) return;

  mousedown(targetEl);
};

export default cNavigationBarChannelsTopSearchResult;