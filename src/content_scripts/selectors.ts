// regex %\.\w+ >% >%

import eHomeCh from './conditions/eHomeCh';

const navigationSelector = (n: number) =>
  `#app > div > div > div > div > div > div:nth-child(1) > div:nth-child(1) > button:nth-child(${n})`;

// const channelViewNthLatestMsg = (n: number) =>
// `#app > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-last-child(${n})`;
const channelViewNthLatestMsg = (n: number) =>
  `div[class*=viewport] > div:nth-last-child(${n})`;

const navigationBarActivityButton = (n: number) =>
  `#app > div > div > div > div > div > div > div > div > div > button:nth-child(${n})`;

const channelViewMsgTool = (n: number) =>
  `#app > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > svg:nth-child(${n})`;

const channelViewContextMenuNthChild = (n: number) =>
  `#message-menu-popup > div > div > span:nth-child(${n})`;

const channelViewContextMenuNthLastChild = (n: number) =>
  `#message-menu-popup > div > div > span:nth-last-child(${n})`;

/**
 * コンテキストメニューが自分のメッセージのものかどうか
 */
const ifMyMsgContextMenu = (): boolean =>
  document.querySelector(channelViewContextMenuNthLastChild(1))?.innerHTML ===
  ' 削除 ';

/**
 * Selectorのリストを返す関数
 */
const selectors: Record<SelectorEnum, () => string | null> = {
  navigationBar: () =>
    '#app > div > div > div > div > div > div:nth-child(2) > div:nth-child(1)',
  popupNavigator: () => navigationSelector(1),
  prevPage: () => '#popup-navigator > div > div:nth-child(1)',
  nextPage: () => '#popup-navigator > div > div:nth-child(2)',
  thTab: () => navigationSelector(2),
  navigationBarHomeHomeCh: () =>
    eHomeCh()
      ? '#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1) > a'
      : null,
  navigationBarHomeTopUnreadCh: () =>
    eHomeCh()
      ? '#app > div > div > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > a' // ホームチャンネルが存在する場合は2番目
      : '#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > a', // ホームチャンネルが存在しない場合は1番目
  navigationBarHomeBottomUnreadCh: () =>
    eHomeCh()
      ? '#app > div > div > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(3) > div:nth-last-child(1) > div:nth-child(1) > a' // ホームチャンネルが存在する場合は2番目
      : '#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(3) > div:nth-last-child(1) > div:nth-child(1) > a', // ホームチャンネルが存在しない場合は1番目
  tcTab: () => navigationSelector(3),
  navigationBarChannelsChFilterInput: () =>
    '#app > div > div > div > div > div > div > div > div > div > div > div > div > input',
  navigationBarChannelsChFilterStar: () =>
    '#app > div > div > div > div > div > div:nth-child(2) > div > div > div > div > button:nth-child(2)',
  navigationBarChannelsChList: () =>
    '#app > div > div > div > div > div > div > div > div > div > div:nth-child(3)',
  navigationBarChannelsChCurrentCh: () =>
    '#app > div > div > div > div > div > div > div > div > div > div:nth-child(3) [aria-selected=true][class^=_container]',
  navigationBarChannelsChCurrentChHash: () =>
    '#app > div > div > div > div > div > div > div > div > div > div:nth-child(3) [aria-selected=true][class^=_hash]',
  taTab: () => navigationSelector(4),
  navigationBarActivityIsNotAllToggleButton: () =>
    navigationBarActivityButton(1),
  navigationBarActivityIsPerChToggleButton: () =>
    navigationBarActivityButton(2),
  navigationBarActivityLatestMsg: () =>
    '#app > div > div > div > div > div > div > div > div > div:nth-child(2) > a:nth-child(1) > div',
  tuTab: () => navigationSelector(5),
  navigationBarUsersUserFilterInput: () =>
    '#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div > input',
  navigationBarUsersUserList: () =>
    '#app > div > div > div > div > div > div > div > div > div > div:nth-child(3)',
  tClipTab: () => navigationSelector(6),
  channelHeaderChName: () =>
    '#header > header > div > h2 > div > div:nth-child(1)',
  // channelViewMsgList: () =>
  //   '#app > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(1)',
  channelViewBackground: () =>
    '#app > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)',
  channelViewFilterContainer: () =>
    '#app > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)',
  channelViewMsgList: () => 'div[class*=viewport]',
  channelViewLatestMsg: () => channelViewNthLatestMsg(1),
  channelView2ndLatestMsg: () => channelViewNthLatestMsg(2),
  channelView3rdLatestMsg: () => channelViewNthLatestMsg(3),
  channelView4thLatestMsg: () => channelViewNthLatestMsg(4),
  channelView5thLatestMsg: () => channelViewNthLatestMsg(5),
  channelView6thLatestMsg: () => channelViewNthLatestMsg(6),
  channelView7thLatestMsg: () => channelViewNthLatestMsg(7),
  channelView8thLatestMsg: () => channelViewNthLatestMsg(8),
  channelView9thLatestMsg: () => channelViewNthLatestMsg(9),
  channelViewMsgToolStamp: () => channelViewMsgTool(1),
  channelViewMsgToolDots: () => channelViewMsgTool(2),
  channelViewContextMenuList: () => '#message-menu-popup > div > div',
  channelViewContextMenuRemovePin: () => channelViewContextMenuNthChild(1),
  channelViewContextMenuAddPin: () => channelViewContextMenuNthChild(1),
  channelViewContextMenuClipMsg: () => channelViewContextMenuNthChild(2),
  channelViewContextMenuEditMsg: () =>
    ifMyMsgContextMenu() ? channelViewContextMenuNthChild(3) : null,
  channelViewContextMenuCopyLink: () =>
    ifMyMsgContextMenu()
      ? channelViewContextMenuNthChild(4)
      : channelViewContextMenuNthChild(3),
  channelViewContextMenuEmbedMsg: () =>
    ifMyMsgContextMenu()
      ? channelViewContextMenuNthChild(5)
      : channelViewContextMenuNthChild(4),
  channelViewContextMenuCopyMarkdown: () =>
    ifMyMsgContextMenu()
      ? channelViewContextMenuNthLastChild(2)
      : channelViewContextMenuNthLastChild(1),
  channelViewContextMenuDeleteMsg: () =>
    ifMyMsgContextMenu() ? channelViewContextMenuNthLastChild(1) : null,
  channelViewMsgInput: () =>
    '#app > div > div > div > div > div > div > div > div > div > div > div > div > div > div > textarea',
  channelViewMsgInputStampButton: () =>
    '#app > div > div > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(3) > button[title=スタンプを挿入]',
  sidebarOpener: () => '#sidebar-opener > div > svg',
  sidebarCloser: () =>
    '#app > div > div > div > div > div > div > div > div > div > div > div > button > div',
  sidebarContentViewers: () =>
    '#app > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)',
};

export default selectors;
