import selectors from '../selectors';

const cNavigationSelectorChannelsTab = () => {
  const channelsTabSelector = selectors.navigationSelectorChannelsTab();
  if (!channelsTabSelector) return;
  document.querySelector<HTMLDivElement>(channelsTabSelector)?.click();
};

export default cNavigationSelectorChannelsTab;
