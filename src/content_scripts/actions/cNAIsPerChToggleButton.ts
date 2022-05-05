import selectors from '../selectors';

const cNAIsPerChToggleButton = () => {
  const toggleButtonSelector =
    selectors.navigationBarActivityIsPerChannelToggleButton();
  if (!toggleButtonSelector) return;
  document.querySelector<HTMLDivElement>(toggleButtonSelector)?.click();
};

export default cNAIsPerChToggleButton;
