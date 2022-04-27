import selectors from '../selectors';
import { click } from './utils/dispatchEvent';
import lazy from '@/utils/lazy';

const clickChannelViewSelectedMessageContextMenuDeleteMessage = () => {
  const dotsSelector = selectors.channelViewMessageToolDots();
  if (!dotsSelector) return;
  const dotsEl = document.querySelector<HTMLDivElement>(dotsSelector);
  if (!dotsEl) return;
  click(dotsEl);
  lazy(() => {
    const targetSelector = selectors.channelViewContextMenuDeleteMessage();
    if (!targetSelector) return;
    document.querySelector<HTMLDivElement>(targetSelector)?.click();
  });
};

export default clickChannelViewSelectedMessageContextMenuDeleteMessage;
