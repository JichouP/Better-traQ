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

const tNAFollowMode = () => {
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
    const latestMsgSelector = selectors.navigationBarActivityLatestMsg();
    if (!latestMsgSelector) return;
    const latestMsg = document.querySelector<HTMLDivElement>(latestMsgSelector);
    if (!latestMsg) return;

    if (latestMsg !== followModeStore.getLatestMsg()) {
      followModeStore.setLatestMsg(latestMsg);
      latestMsg.click();
    }
  }, 100);
  navigationBarTitleEl.innerHTML = 'アクティビティ🔴';
  followModeStore.setHandler(handler);
};

export default tNAFollowMode;
