import selectors from '../selectors';

const cTCTab = () => {
  const channelsTabSelector = selectors.navigationSelectorChannelsTab();
  if (!channelsTabSelector) return;
  document.querySelector<HTMLDivElement>(channelsTabSelector)?.click();
};

export default cTCTab;
