import selectors from '../selectors';

const cNCChFilterStar = () => {
  const starSelector = selectors.navigationBarChannelsChFilterStar();
  if (!starSelector) return;
  document.querySelector<HTMLDivElement>(starSelector)?.click();
};

export default cNCChFilterStar;
