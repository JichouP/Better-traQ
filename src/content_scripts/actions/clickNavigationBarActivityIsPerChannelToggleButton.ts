import selectors from '../selectors';

const clickNavigationBarActivityIsPerChannelToggleButton = () => {
  const selector = selectors.navigationBarActivityIsPerChannelToggleButton();
  if (!selector) return;
  document.querySelector<HTMLDivElement>(selector)?.click();
};

export default clickNavigationBarActivityIsPerChannelToggleButton;
