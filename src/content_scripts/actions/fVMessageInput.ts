import selectors from '../selectors';

const fVMessageInput = () => {
  const messageInputSelector = selectors.channelViewMessageInput();
  if (!messageInputSelector) return;
  document.querySelector<HTMLTextAreaElement>(messageInputSelector)?.focus();
};

export default fVMessageInput;
