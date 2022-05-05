import selectors from '../selectors';
import { click } from './utils/dispatchEvent';
import lazy from '@/utils/lazy';

const cVSelectedMessageContextMenuEditMessage = () => {
  const dotsSelector = selectors.channelViewMessageToolDots();
  if (!dotsSelector) return;
  const dotsEl = document.querySelector<HTMLDivElement>(dotsSelector);
  if (!dotsEl) return;
  const messageEl = dotsEl.parentElement?.parentElement?.parentElement;
  click(dotsEl);
  lazy(() => {
    const targetSelector = selectors.channelViewContextMenuEditMessage();
    if (!targetSelector) return;
    document.querySelector<HTMLDivElement>(targetSelector)?.click();
    lazy(() => {
      const editorEl =
        messageEl?.querySelector<HTMLTextAreaElement>(':scope textarea');
      if (!editorEl) return;
      editorEl.focus();
    });
  });
};

export default cVSelectedMessageContextMenuEditMessage;
