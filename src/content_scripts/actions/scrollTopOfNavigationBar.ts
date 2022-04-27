import selectors from '../selectors';

const scrollTopOfNavigationBar = () => {
  const navigationBarSelector = selectors.navigationBar();
  if (!navigationBarSelector) return;
  document.querySelector<HTMLDivElement>(navigationBarSelector)?.scrollTo(0, 0);
};

export default scrollTopOfNavigationBar;
