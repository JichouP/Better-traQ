import selectors from '../selectors';

const clickNextPage = () => {
  const nextPageSelector = selectors.nextPage();
  if (!nextPageSelector) return;
  document.querySelector<HTMLDivElement>(nextPageSelector)?.click();
};

export default clickNextPage;
