import selectors from '../selectors';

const clickNavigationSelectorChannelsTab = () => {
  const channelsTabSelector = selectors.navigationSelectorChannelsTab();
  if (!channelsTabSelector) return;
  document.querySelector<HTMLDivElement>(channelsTabSelector)?.click();
};

export default clickNavigationSelectorChannelsTab;
