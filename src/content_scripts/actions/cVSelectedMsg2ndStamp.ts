import selectors from '../selectors';

const cVSelectedMsg2ndStamp = () => {
  const messageListSelector = selectors.channelViewMsgList();
  if (!messageListSelector) return;
  const messageListContainerEl =
    document.querySelector<HTMLDivElement>(messageListSelector);
  if (!messageListContainerEl) return;

  // メッセージツールを探す
  const messageTool = messageListContainerEl.querySelector<HTMLDivElement>(
    ':scope > div > div[class*=tool]'
  );
  if (!messageTool) return;
  const targetMessage = messageTool.parentElement as HTMLDivElement;
  if (!targetMessage) return;

  const stamp = targetMessage.querySelector<HTMLDivElement>(
    ':scope > div:nth-last-child(1) > div > div:nth-child(2) > div:nth-child(1)'
  );

  stamp?.click();
};

export default cVSelectedMsg2ndStamp;
