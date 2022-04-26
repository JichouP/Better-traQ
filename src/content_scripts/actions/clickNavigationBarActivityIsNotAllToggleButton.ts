import selectors from '../selectors';

const clickNavigationBarActivityIsNotAllToggleButton = () => {
  const selector = selectors.navigationBarActivityIsNotAllToggleButton();
  if (!selector) return;
  document.querySelector<HTMLDivElement>(selector)?.click();
};

export default clickNavigationBarActivityIsNotAllToggleButton;
