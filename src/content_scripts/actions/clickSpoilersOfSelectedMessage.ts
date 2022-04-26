import selectors from '../selectors';

const clickSpoilersOfSelectedMessage = () => {
  const messageListSelector = selectors.channelViewMessageList();
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

  const spoilers = [
    ...targetMessage.querySelectorAll<HTMLSpanElement>(':scope span.spoiler'),
  ];

  spoilers.forEach((spoiler) => spoiler.click());
};

export default clickSpoilersOfSelectedMessage;
