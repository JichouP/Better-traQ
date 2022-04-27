import selectors from '../selectors';

const focusChannelViewMessageInput = () => {
  const messageInputSelector = selectors.channelViewMessageInput();
  if (!messageInputSelector) return;
  document.querySelector<HTMLTextAreaElement>(messageInputSelector)?.focus();
};

export default focusChannelViewMessageInput;
