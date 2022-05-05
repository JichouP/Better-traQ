import selectors from '../selectors';

const cNextPage = () => {
  const nextPageSelector = selectors.nextPage();
  if (!nextPageSelector) return;
  document.querySelector<HTMLDivElement>(nextPageSelector)?.click();
};

export default cNextPage;
