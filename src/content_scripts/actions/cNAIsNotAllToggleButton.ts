import selectors from '../selectors';

const cNAIsNotAllToggleButton = () => {
  const toggleButtonSelector =
    selectors.navigationBarActivityIsNotAllToggleButton();
  if (!toggleButtonSelector) return;
  document.querySelector<HTMLDivElement>(toggleButtonSelector)?.click();
};

export default cNAIsNotAllToggleButton;
