import selectors from '../selectors';

const cTCTab = () => {
  const channelsTabSelector = selectors.tcTab();
  if (!channelsTabSelector) return;
  document.querySelector<HTMLDivElement>(channelsTabSelector)?.click();
};

export default cTCTab;
