import selectors from '../selectors';
import { mousedown } from './utils/dispatchEvent';

const clickNavigationBarHomeHomeChannel = () => {
  const homeChannelSelector = selectors.navigationBarHomeHomeChannel();
  if (!homeChannelSelector) return;
  const homeChannelEl =
    document.querySelector<HTMLDivElement>(homeChannelSelector);
  if (!homeChannelEl) return;
  mousedown(homeChannelEl);
};

export default clickNavigationBarHomeHomeChannel;
