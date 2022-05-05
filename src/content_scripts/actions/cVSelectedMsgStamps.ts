import selectors from '../selectors';

const cVSelectedMsgStamps = () => {
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

  const stamps = [
    ...targetMsg.querySelectorAll<HTMLDivElement>(
      ':scope > div:nth-last-child(1) > div > div > div:not([data-include-me])'
    ),
  ];

  stamps.forEach((stamp) => stamp.click());
};

export default cVSelectedMsgStamps;
