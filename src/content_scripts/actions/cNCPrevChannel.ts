import { mousedown } from './utils/dispatchEvent';
import getChannelList from './utils/getChannelList';
import getIndexOfCurrentChannel from './utils/getIndexOfCurrentChannel';

const cNCPrevChannel = () => {
  const channelList = getChannelList();
  if (!channelList) return;
  const currentChannelIndex = getIndexOfCurrentChannel();
  if (currentChannelIndex === undefined) return;
  const targetElementContainer = channelList[currentChannelIndex - 1];
  if (!targetElementContainer) return;
  const targetElement = targetElementContainer.querySelector<HTMLDivElement>(
    ':scope > div:nth-child(1)'
  );
  if (!targetElement) return;
  mousedown(targetElement);
};

export default cNCPrevChannel;
