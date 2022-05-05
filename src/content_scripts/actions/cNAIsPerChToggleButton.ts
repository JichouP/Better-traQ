import selectors from '../selectors';

const cNAIsPerChToggleButton = () => {
  const toggleButtonSelector =
    selectors.navigationBarActivityIsPerChToggleButton();
  if (!toggleButtonSelector) return;
  document.querySelector<HTMLDivElement>(toggleButtonSelector)?.click();
};

export default cNAIsPerChToggleButton;
