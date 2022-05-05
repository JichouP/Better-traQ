import selectors from '../selectors';

const cNAIsPerChannelToggleButton = () => {
  const toggleButtonSelector =
    selectors.navigationBarActivityIsPerChannelToggleButton();
  if (!toggleButtonSelector) return;
  document.querySelector<HTMLDivElement>(toggleButtonSelector)?.click();
};

export default cNAIsPerChannelToggleButton;
