import selectors from '../selectors';
import { click, mouseenter } from './utils/dispatchEvent';
import lazy from '@/utils/lazy';

const cVLatestMsgContextMenuCopyLink = () => {
  const latestMsgSelector = selectors.channelViewLatestMsg();
  if (!latestMsgSelector) return;
  const latestMsgEl = document.querySelector<HTMLDivElement>(latestMsgSelector);
  if (!latestMsgEl) return;
  mouseenter(latestMsgEl);
  lazy(() => {
    const dotsSelector = selectors.channelViewMsgToolDots();
    if (!dotsSelector) return;
    const dotsEl = document.querySelector<HTMLDivElement>(dotsSelector);
    if (!dotsEl) return;
    click(dotsEl);
    lazy(() => {
      const targetSelector = selectors.channelViewContextMenuCopyLink();
      if (!targetSelector) return;
      document.querySelector<HTMLDivElement>(targetSelector)?.click();
    });
  });
};

export default cVLatestMsgContextMenuCopyLink;
