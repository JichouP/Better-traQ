import selectors from '../selectors';

const cSidebarContentViewers = () => {
  const viewersSelector = selectors.sidebarContentViewers();
  if (!viewersSelector) return;
  document.querySelector<HTMLDivElement>(viewersSelector)?.click();
};

export default cSidebarContentViewers;
