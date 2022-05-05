import selectors from '../selectors';
import { mousedown } from './utils/dispatchEvent';

const cNHHomeChannel = () => {
  const homeChannelSelector = selectors.navigationBarHomeHomeChannel();
  if (!homeChannelSelector) return;
  const homeChannelEl =
    document.querySelector<HTMLDivElement>(homeChannelSelector);
  if (!homeChannelEl) return;
  mousedown(homeChannelEl);
};

export default cNHHomeChannel;
