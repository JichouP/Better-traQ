import selectors from '../selectors';

const sNCToCurrentCh = () => {
  const currentChSelector = selectors.navigationBarChannelsChCurrentCh();
  if (!currentChSelector) return;
  const currentCh = document.querySelector<HTMLDivElement>(currentChSelector);
  if (!currentCh) return;
  currentCh.scrollIntoView({ behavior: 'auto', block: 'center' });
};

export default sNCToCurrentCh;
