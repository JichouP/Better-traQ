import selectors from '../selectors';

const clickNavigationBarChannelsChannelFilterStar = () => {
  const selector = selectors.navigationBarChannelsChannelFilterStar();
  if (!selector) return;
  document.querySelector<HTMLDivElement>(selector)?.click();
};

export default clickNavigationBarChannelsChannelFilterStar;
