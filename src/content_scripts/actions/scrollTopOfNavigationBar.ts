import selectors from '../selectors';

const scrollTopOfNavigationBar = () => {
  const selector = selectors.navigationBar();
  if (!selector) return;
  const el = document.querySelector<HTMLDivElement>(selector);
  if (!el) return;
  el.scrollTo(0, 0);
};

export default scrollTopOfNavigationBar;
