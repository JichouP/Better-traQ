import selectors from '../selectors';

const scrollToBottomOfChannelView = () => {
  const selector = selectors.channelViewMessageList();
  if (!selector) return;
  const el = document.querySelector<HTMLDivElement>(selector);
  if (!el) return;
  el.parentElement?.scrollTo({ top: el.parentElement.scrollHeight });
};

export default scrollToBottomOfChannelView;
