import selectors from '../selectors';

const cVSelectedMsgSpoilers = () => {
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
  const targetMsg = messageTool.parentElement as HTMLDivElement;
  if (!targetMsg) return;

  const spoilers = [
    ...targetMsg.querySelectorAll<HTMLSpanElement>(':scope span.spoiler'),
  ];

  spoilers.forEach((spoiler) => spoiler.click());
};

export default cVSelectedMsgSpoilers;
