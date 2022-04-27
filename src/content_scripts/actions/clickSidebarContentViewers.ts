import selectors from '../selectors';

const clickSidebarContentViewers = () => {
  const viewersSelector = selectors.sidebarContentViewers();
  if (!viewersSelector) return;
  document.querySelector<HTMLDivElement>(viewersSelector)?.click();
};

export default clickSidebarContentViewers;
