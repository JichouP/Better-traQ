import selectors from '../selectors';

const cVSelectedMsg5thStamp = () => {
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
    ':scope > div:nth-last-child(1) > div > div:nth-child(5) > div:nth-child(1)'
  );

  stamp?.click();
};

export default cVSelectedMsg5thStamp;
