import selectors from '../selectors';

const cNavigationBarChannelsChannelFilterStar = () => {
  const starSelector = selectors.navigationBarChannelsChannelFilterStar();
  if (!starSelector) return;
  document.querySelector<HTMLDivElement>(starSelector)?.click();
};

export default cNavigationBarChannelsChannelFilterStar;
