import selectors from '../selectors';

const sTopOfNavigationBar = () => {
  const navigationBarSelector = selectors.navigationBar();
  if (!navigationBarSelector) return;
  document.querySelector<HTMLDivElement>(navigationBarSelector)?.scrollTo(0, 0);
};

export default sTopOfNavigationBar;
