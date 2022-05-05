import selectors from '../selectors';

const clickPrevPage = () => {
  const prevPageSelector = selectors.prevPage();
  if (!prevPageSelector) return;
  document.querySelector<HTMLDivElement>(prevPageSelector)?.click();
};

export default clickPrevPage;
