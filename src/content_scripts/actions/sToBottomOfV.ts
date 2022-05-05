import selectors from '../selectors';

const sToBottomOfV = () => {
  const messageListSelector = selectors.channelViewMsgList();
  if (!messageListSelector) return;
  const messageListEl =
    document.querySelector<HTMLDivElement>(messageListSelector);
  if (!messageListEl) return;
  messageListEl.parentElement?.scrollTo({
    top: messageListEl.parentElement.scrollHeight,
  });
};

export default sToBottomOfV;
