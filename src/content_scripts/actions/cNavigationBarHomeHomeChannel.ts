import selectors from '../selectors';
import { mousedown } from './utils/dispatchEvent';

const cNavigationBarHomeHomeChannel = () => {
  const homeChannelSelector = selectors.navigationBarHomeHomeChannel();
  if (!homeChannelSelector) return;
  const homeChannelEl =
    document.querySelector<HTMLDivElement>(homeChannelSelector);
  if (!homeChannelEl) return;
  mousedown(homeChannelEl);
};

export default cNavigationBarHomeHomeChannel;
