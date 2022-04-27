import selectors from '../selectors';

const clickNavigationBarActivityIsPerChannelToggleButton = () => {
  const toggleButtonSelector =
    selectors.navigationBarActivityIsPerChannelToggleButton();
  if (!toggleButtonSelector) return;
  document.querySelector<HTMLDivElement>(toggleButtonSelector)?.click();
};

export default clickNavigationBarActivityIsPerChannelToggleButton;
