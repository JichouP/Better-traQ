import selectors from '../selectors';
import followModeStore from '@/store/ForrowModeStore';

const isActivity = () => {
  const selector = `${selectors.navigationBar()} > h2`;
  const el = document.querySelector<HTMLDivElement>(selector);
  if (!el) return false;
  return el.innerHTML === 'アクティビティ';
};

const toggleNavigationBarActivityFollowMode = () => {
  if (followModeStore.isFollowMode()) {
    window.clearInterval(followModeStore.getHandler());
    return followModeStore.setHandler(0);
  }

  const handler = window.setInterval(() => {
    if (!isActivity()) {
      window.clearInterval(followModeStore.getHandler());
      return followModeStore.setHandler(0);
    }
    const latestMessageSelector =
      selectors.navigationBarActivityLatestMessage();
    if (!latestMessageSelector) return;
    const latestMessage = document.querySelector<HTMLDivElement>(
      latestMessageSelector
    );
    if (!latestMessage) return;

    if (latestMessage !== followModeStore.getLatestMessage()) {
      followModeStore.setLatestMessage(latestMessage);
      latestMessage.click();
    }
  }, 1000);
  followModeStore.setHandler(handler);
};

export default toggleNavigationBarActivityFollowMode;
