import selectors from '../selectors';

const cPrevPage = () => {
  const prevPageSelector = selectors.prevPage();
  if (!prevPageSelector) return;
  document.querySelector<HTMLDivElement>(prevPageSelector)?.click();
};

export default cPrevPage;
