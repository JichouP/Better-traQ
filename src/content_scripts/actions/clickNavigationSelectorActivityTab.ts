import selectors from '../selectors';

const clickNavigationSelectorActivityTab = () => {
  const selector = selectors.navigationSelectorActivityTab();
  if (!selector) return;
  document.querySelector<HTMLDivElement>(selector)?.click();
};

export default clickNavigationSelectorActivityTab;
