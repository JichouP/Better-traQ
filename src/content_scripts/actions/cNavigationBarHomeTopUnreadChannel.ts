import selectors from '../selectors';
import { mousedown } from './utils/dispatchEvent';

const cNavigationBarHomeTopUnreadChannel = () => {
  const unreadChannelSelector = selectors.navigationBarHomeTopUnreadChannel();
  if (!unreadChannelSelector) return;
  const unreadChannelEl = document.querySelector<HTMLDivElement>(
    unreadChannelSelector
  );
  if (!unreadChannelEl) return;
  mousedown(unreadChannelEl);
};

export default cNavigationBarHomeTopUnreadChannel;