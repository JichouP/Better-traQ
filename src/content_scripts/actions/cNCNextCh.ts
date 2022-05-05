import { mousedown } from './utils/dispatchEvent';
import getChList from './utils/getChList';
import getIndexOfCurrentCh from './utils/getIndexOfCurrentChannel';

const cNCNextCh = () => {
  const channelList = getChList();
  if (!channelList) return;
  const currentChIndex = getIndexOfCurrentCh();
  if (currentChIndex === undefined) return;
  const targetElementContainer = channelList[currentChIndex + 1];
  if (!targetElementContainer) return;
  const targetElement = targetElementContainer.querySelector<HTMLDivElement>(
    ':scope > div:nth-child(1)'
  );
  if (!targetElement) return;
  mousedown(targetElement);
};

export default cNCNextCh;
