import selectors from '../selectors';
import mouseleaveChannelViewAllMessages from './mouseleaveChannelViewAllMessages';
import { mouseenter } from './utils/dispatchEvent';

const mouseoverChannelViewMessageListNextMessage = () => {
  const messageListSelector = selectors.channelViewMessageList();
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
    const latestMessageSelector = selectors.channelViewLatestMessage();
    if (!latestMessageSelector) return;
    const latestMessageEl = document.querySelector<HTMLDivElement>(
      latestMessageSelector
    );
    if (!latestMessageEl) return;
    mouseleaveChannelViewAllMessages();
    latestMessageEl.scrollIntoView({ block: 'center' });
    return mouseenter(latestMessageEl);
  }
  // メッセージツールがあったら、次のメッセージを選択する
  let targetMessage = messageTool.parentElement
    ?.nextElementSibling as HTMLDivElement;
  if (!targetMessage) return;
  // 子要素が日付変更線だったら、1個次のメッセージを選択する
  if (
    targetMessage.className.includes('dateSeparator') ||
    targetMessage.className.includes('unreadSeparator')
  ) {
    targetMessage = targetMessage.nextElementSibling as HTMLDivElement;
  }
  mouseleaveChannelViewAllMessages();
  targetMessage.scrollIntoView({ block: 'center' });
  return mouseenter(targetMessage);
};

export default mouseoverChannelViewMessageListNextMessage;
