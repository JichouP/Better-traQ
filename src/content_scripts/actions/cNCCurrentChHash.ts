import { clickHash } from './utils/dispatchEvent';
import getChList from './utils/getChList';
import getIndexOfCurrentCh from './utils/getIndexOfCurrentChannel';

const cNCCurrentChHash = () => {
  const channelList = getChList();
  if (!channelList) return;
  const currentChIndex = getIndexOfCurrentCh();
  if (currentChIndex === undefined) return;
  const targetElementContainer = channelList[currentChIndex];
  if (!targetElementContainer) return;
  const targetElement = targetElementContainer.querySelector<HTMLDivElement>(
    ':scope > div:nth-child(1) > div:nth-child(1)'
  );
  if (!targetElement) return;
  clickHash(targetElement);
};

export default cNCCurrentChHash;
