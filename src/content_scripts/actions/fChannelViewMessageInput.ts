import selectors from '../selectors';

const fChannelViewMessageInput = () => {
  const messageInputSelector = selectors.channelViewMessageInput();
  if (!messageInputSelector) return;
  document.querySelector<HTMLTextAreaElement>(messageInputSelector)?.focus();
};

export default fChannelViewMessageInput;
