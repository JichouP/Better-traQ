import selectors from '../selectors';
import { click } from './utils/dispatchEvent';

const cVMsgInputStampButton = () => {
  const stampButtonSelector = selectors.channelViewMsgInputStampButton();
  if (!stampButtonSelector) return;
  const stampButtonEl =
    document.querySelector<HTMLDivElement>(stampButtonSelector);
  if (!stampButtonEl) return;
  click(stampButtonEl);
};

export default cVMsgInputStampButton;
