import selectors from '../selectors';
import lVAllMsgs from './lVAllMsgs';
import { mouseenter } from './utils/dispatchEvent';

const oVNextMsg = () => {
  const messageListSelector = selectors.channelViewMsgList();
  if (!messageListSelector) return;
  const messageListContainerEl =
    document.querySelector<HTMLDivElement>(messageListSelector);
  if (!messageListContainerEl) return;

  // メッセージツールを探す
  const messageTool = messageListContainerEl.querySelector<HTMLDivElement>(
    ':scope > div > div[class*=tool]'
  );
  // もしなかったら、最新のメッセージを選択する
  if (!messageTool) {
    const latestMsgSelector = selectors.channelViewLatestMsg();
    if (!latestMsgSelector) return;
    const latestMsgEl =
      document.querySelector<HTMLDivElement>(latestMsgSelector);
    if (!latestMsgEl) return;
    lVAllMsgs();
    latestMsgEl.scrollIntoView({ block: 'center' });
    return mouseenter(latestMsgEl);
  }
  // メッセージツールがあったら、次のメッセージを選択する
  let targetMsg = messageTool.parentElement
    ?.nextElementSibling as HTMLDivElement;
  if (!targetMsg) return;
  // 子要素が日付変更線だったら、1個次のメッセージを選択する
  if (
    targetMsg.className.includes('dateSeparator') ||
    targetMsg.className.includes('unreadSeparator')
  ) {
    targetMsg = targetMsg.nextElementSibling as HTMLDivElement;
  }
  lVAllMsgs();
  targetMsg.scrollIntoView({ block: 'center' });
  return mouseenter(targetMsg);
};

export default oVNextMsg;
