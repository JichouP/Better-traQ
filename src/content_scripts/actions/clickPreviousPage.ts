import selectors from '../selectors';

const clickPreviousPage = () => {
  const previousPageSelector = selectors.previousPage();
  if (!previousPageSelector) return;
  document.querySelector<HTMLDivElement>(previousPageSelector)?.click();
};

export default clickPreviousPage;
