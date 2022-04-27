import selectors from '../selectors';

const clickNavigationBarActivityIsNotAllToggleButton = () => {
  const toggleButtonSelector =
    selectors.navigationBarActivityIsNotAllToggleButton();
  if (!toggleButtonSelector) return;
  document.querySelector<HTMLDivElement>(toggleButtonSelector)?.click();
};

export default clickNavigationBarActivityIsNotAllToggleButton;
