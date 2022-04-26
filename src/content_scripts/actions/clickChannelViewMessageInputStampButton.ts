import selectors from '../selectors';
import { click } from './utils/dispatchEvent';

const clickChannelViewMessageInputStampButton = () => {
  const selector = selectors.channelViewMessageInputStampButton();
  if (!selector) return;
  const el = document.querySelector<HTMLTextAreaElement>(selector);
  if (!el) return;
  click(el);
};

export default clickChannelViewMessageInputStampButton;
