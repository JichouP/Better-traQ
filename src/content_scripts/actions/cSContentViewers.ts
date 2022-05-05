import selectors from '../selectors';

const cSContentViewers = () => {
  const viewersSelector = selectors.sidebarContentViewers();
  if (!viewersSelector) return;
  document.querySelector<HTMLDivElement>(viewersSelector)?.click();
};

export default cSContentViewers;
