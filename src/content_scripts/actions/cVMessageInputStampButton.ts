import selectors from '../selectors';
import { click } from './utils/dispatchEvent';

const cVMessageInputStampButton = () => {
  const stampButtonSelector = selectors.channelViewMessageInputStampButton();
  if (!stampButtonSelector) return;
  const stampButtonEl =
    document.querySelector<HTMLDivElement>(stampButtonSelector);
  if (!stampButtonEl) return;
  click(stampButtonEl);
};

export default cVMessageInputStampButton;
