import selectors from '../selectors';

const cNavigationBarActivityIsNotAllToggleButton = () => {
  const toggleButtonSelector =
    selectors.navigationBarActivityIsNotAllToggleButton();
  if (!toggleButtonSelector) return;
  document.querySelector<HTMLDivElement>(toggleButtonSelector)?.click();
};

export default cNavigationBarActivityIsNotAllToggleButton;
