import selectors from '../selectors';
import { click } from './utils/dispatchEvent';
import lazy from '@/utils/lazy';

const clickChannelViewSelectedMessageContextMenuAddPin = () => {
  const dotsSelector = selectors.channelViewMessageToolDots();
  if (!dotsSelector) return;
  const dotsEl = document.querySelector<HTMLDivElement>(dotsSelector);
  if (!dotsEl) return;
  click(dotsEl);
  lazy(() => {
    const targetSelector = selectors.channelViewContextMenuAddPin();
    if (!targetSelector) return;
    const targetEl = document.querySelector<HTMLDivElement>(targetSelector);
    if (!targetEl) return;
    targetEl.click();
  });
};

export default clickChannelViewSelectedMessageContextMenuAddPin;
