import selectors from '../selectors';
import lVAllMsgs from './lVAllMsgs';
import { click, mouseenter } from './utils/dispatchEvent';
import lazy from '@/utils/lazy';

const cVLatestMsgContextMenuEditMsg = () => {
  const latestMsgSelector = selectors.channelViewLatestMsg();
  if (!latestMsgSelector) return;
  const latestMsgEl = document.querySelector<HTMLDivElement>(latestMsgSelector);
  if (!latestMsgEl) return;
  // マウスポインタでメッセージツールが出ている場合
  lVAllMsgs();
  lazy(() => {
    mouseenter(latestMsgEl);
    lazy(() => {
      const dotsSelector = selectors.channelViewMsgToolDots();
      if (!dotsSelector) return;
      const dotsEl = document.querySelector<HTMLDivElement>(dotsSelector);
      if (!dotsEl) return;
      click(dotsEl);
      lazy(() => {
        const targetSelector = selectors.channelViewContextMenuEditMsg();
        if (!targetSelector) return;
        document.querySelector<HTMLDivElement>(targetSelector)?.click();
        lazy(() => {
          const editorEl =
            latestMsgEl.querySelector<HTMLTextAreaElement>(':scope textarea');
          if (!editorEl) return;
          editorEl.focus();
        });
      });
    });
  });
};

export default cVLatestMsgContextMenuEditMsg;
