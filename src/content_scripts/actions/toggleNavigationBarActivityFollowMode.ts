import selectors from '../selectors';
import followModeStore from '@/store/FollowModeStore';

const isActivity = () => {
  const navigationBarTitleSelector = `${selectors.navigationBar()} > h2`;
  const navigationBarTitleEl = document.querySelector<HTMLDivElement>(
    navigationBarTitleSelector
  );
  if (!navigationBarTitleEl) return false;

  return navigationBarTitleEl.innerHTML.includes('アクティビティ');
};

const toggleNavigationBarActivityFollowMode = () => {
  const navigationBarTitleSelector = `${selectors.navigationBar()} > h2`;
  const navigationBarTitleEl = document.querySelector<HTMLDivElement>(
    navigationBarTitleSelector
  );
  if (!navigationBarTitleEl) return;

  if (followModeStore.isFollowMode()) {
    navigationBarTitleEl.innerHTML = 'アクティビティ';
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
  }, 100);
  navigationBarTitleEl.innerHTML = 'アクティビティ🔴';
  followModeStore.setHandler(handler);
};

export default toggleNavigationBarActivityFollowMode;
