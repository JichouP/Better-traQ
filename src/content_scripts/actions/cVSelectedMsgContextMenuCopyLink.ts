import selectors from '../selectors';
import { click } from './utils/dispatchEvent';
import lazy from '@/utils/lazy';

const cVSelectedMsgContextMenuCopyLink = () => {
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
};

export default cVSelectedMsgContextMenuCopyLink;
