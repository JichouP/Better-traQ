import selectors from '../selectors';
import { click } from './utils/dispatchEvent';
import lazy from '@/utils/lazy';

const clickChannelViewSelectedMessageContextMenuClipMessage = () => {
  const dotsSelector = selectors.channelViewMessageToolDots();
  if (!dotsSelector) return;
  const dotsEl = document.querySelector<HTMLDivElement>(dotsSelector);
  if (!dotsEl) return;
  click(dotsEl);
  lazy(() => {
    const targetSelector = selectors.channelViewContextMenuClipMessage();
    if (!targetSelector) return;
    document.querySelector<HTMLDivElement>(targetSelector)?.click();
  });
};

export default clickChannelViewSelectedMessageContextMenuClipMessage;
