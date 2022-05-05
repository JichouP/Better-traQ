import selectors from '../selectors';

const fVMsgInput = () => {
  const messageInputSelector = selectors.channelViewMsgInput();
  if (!messageInputSelector) return;
  document.querySelector<HTMLTextAreaElement>(messageInputSelector)?.focus();
};

export default fVMsgInput;
