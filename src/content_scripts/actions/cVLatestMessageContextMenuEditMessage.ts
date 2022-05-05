import selectors from '../selectors';
import lVAllMessages from './lVAllMessages';
import { click, mouseenter } from './utils/dispatchEvent';
import lazy from '@/utils/lazy';

const cVLatestMessageContextMenuEditMessage = () => {
  const latestMessageSelector = selectors.channelViewLatestMessage();
  if (!latestMessageSelector) return;
  const latestMessageEl = document.querySelector<HTMLDivElement>(
    latestMessageSelector
  );
  if (!latestMessageEl) return;
  // マウスポインタでメッセージツールが出ている場合
  lVAllMessages();
  lazy(() => {
    mouseenter(latestMessageEl);
    lazy(() => {
      const dotsSelector = selectors.channelViewMessageToolDots();
      if (!dotsSelector) return;
      const dotsEl = document.querySelector<HTMLDivElement>(dotsSelector);
      if (!dotsEl) return;
      click(dotsEl);
      lazy(() => {
        const targetSelector = selectors.channelViewContextMenuEditMessage();
        if (!targetSelector) return;
        document.querySelector<HTMLDivElement>(targetSelector)?.click();
        lazy(() => {
          const editorEl =
            latestMessageEl.querySelector<HTMLTextAreaElement>(
              ':scope textarea'
            );
          if (!editorEl) return;
          editorEl.focus();
        });
      });
    });
  });
};

export default cVLatestMessageContextMenuEditMessage;
