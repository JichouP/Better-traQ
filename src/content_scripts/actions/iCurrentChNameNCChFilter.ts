import selectors from '../selectors';
import getCurrentChNames from './utils/getCurrentChannelNames';

const iCurrentChNameNCChFilter = () => {
  const channelFilterInputSelector =
    selectors.navigationBarChannelsChFilterInput();
  if (!channelFilterInputSelector) return;
  const channelFilterInputEl = document.querySelector<HTMLInputElement>(
    channelFilterInputSelector
  );
  if (!channelFilterInputEl) return;
  const currentChNames = getCurrentChNames();
  if (!currentChNames) return;
  channelFilterInputEl.value = `${currentChNames.join('/')}/`;
};

export default iCurrentChNameNCChFilter;
