import selectors from '../selectors';

const cNCChannelFilterStar = () => {
  const starSelector = selectors.navigationBarChannelsChannelFilterStar();
  if (!starSelector) return;
  document.querySelector<HTMLDivElement>(starSelector)?.click();
};

export default cNCChannelFilterStar;
