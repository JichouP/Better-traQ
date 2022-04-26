import selectors from '../selectors';

const clickPreviousPage = () => {
  const selector = selectors.previousPage();
  if (!selector) return;
  document.querySelector<HTMLDivElement>(selector)?.click();
};

export default clickPreviousPage;
