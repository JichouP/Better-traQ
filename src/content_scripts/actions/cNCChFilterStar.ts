import selectors from '../selectors';

const cNCChFilterStar = () => {
  const starSelector = selectors.navigationBarChannelsChannelFilterStar();
  if (!starSelector) return;
  document.querySelector<HTMLDivElement>(starSelector)?.click();
};

export default cNCChFilterStar;
