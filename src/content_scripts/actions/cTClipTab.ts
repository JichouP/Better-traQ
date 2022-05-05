import selectors from '../selectors';

const cTClipTab = () => {
  const clipTabSelector = selectors.tClipTab();
  if (!clipTabSelector) return;
  document.querySelector<HTMLDivElement>(clipTabSelector)?.click();
};

export default cTClipTab;
