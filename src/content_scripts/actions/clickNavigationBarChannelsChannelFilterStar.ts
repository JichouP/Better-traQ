import selectors from '../selectors';

const clickNavigationBarChannelsChannelFilterStar = () => {
  const starSelector = selectors.navigationBarChannelsChannelFilterStar();
  if (!starSelector) return;
  document.querySelector<HTMLDivElement>(starSelector)?.click();
};

export default clickNavigationBarChannelsChannelFilterStar;
