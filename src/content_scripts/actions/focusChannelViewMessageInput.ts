import selectors from '../selectors';

const focusChannelViewMessageInput = () => {
  const selector = selectors.channelViewMessageInput();
  if (!selector) return;
  const el = document.querySelector<HTMLTextAreaElement>(selector);
  if (!el) return;
  el.focus();
};

export default focusChannelViewMessageInput;
