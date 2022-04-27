import selectors from '../selectors';

const scrollToBottomOfChannelView = () => {
  const messageListSelector = selectors.channelViewMessageList();
  if (!messageListSelector) return;
  const messageListEl =
    document.querySelector<HTMLDivElement>(messageListSelector);
  if (!messageListEl) return;
  messageListEl.parentElement?.scrollTo({
    top: messageListEl.parentElement.scrollHeight,
  });
};

export default scrollToBottomOfChannelView;
