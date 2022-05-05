import selectors from '../selectors';
import { click, mouseenter } from './utils/dispatchEvent';
import lazy from '@/utils/lazy';

const cVLatestMessageContextMenuCopyMarkdown = () => {
  const latestMessageSelector = selectors.channelViewLatestMessage();
  if (!latestMessageSelector) return;
  const latestMessageEl = document.querySelector<HTMLDivElement>(
    latestMessageSelector
  );
  if (!latestMessageEl) return;
  mouseenter(latestMessageEl);
  lazy(() => {
    const dotsSelector = selectors.channelViewMessageToolDots();
    if (!dotsSelector) return;
    const dotsEl = document.querySelector<HTMLDivElement>(dotsSelector);
    if (!dotsEl) return;
    click(dotsEl);
    lazy(() => {
      const targetSelector = selectors.channelViewContextMenuCopyMarkdown();
      if (!targetSelector) return;
      document.querySelector<HTMLDivElement>(targetSelector)?.click();
    });
  });
};

export default cVLatestMessageContextMenuCopyMarkdown;
