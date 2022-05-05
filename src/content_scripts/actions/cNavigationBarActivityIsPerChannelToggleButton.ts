import selectors from '../selectors';

const cNavigationBarActivityIsPerChannelToggleButton = () => {
  const toggleButtonSelector =
    selectors.navigationBarActivityIsPerChannelToggleButton();
  if (!toggleButtonSelector) return;
  document.querySelector<HTMLDivElement>(toggleButtonSelector)?.click();
};

export default cNavigationBarActivityIsPerChannelToggleButton;
