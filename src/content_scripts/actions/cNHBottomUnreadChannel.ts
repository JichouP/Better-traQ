import selectors from '../selectors';
import { mousedown } from './utils/dispatchEvent';

const cNHBottomUnreadChannel = () => {
  const unreadChannelSelector =
    selectors.navigationBarHomeBottomUnreadChannel();
  if (!unreadChannelSelector) return;
  const unreadChannelEl = document.querySelector<HTMLDivElement>(
    unreadChannelSelector
  );
  if (!unreadChannelEl) return;
  mousedown(unreadChannelEl);
};

export default cNHBottomUnreadChannel;
