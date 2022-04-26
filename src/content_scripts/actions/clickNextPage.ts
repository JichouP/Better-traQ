import selectors from '../selectors';

const clickNextPage = () => {
  const selector = selectors.nextPage();
  if (!selector) return;
  document.querySelector<HTMLDivElement>(selector)?.click();
};

export default clickNextPage;
