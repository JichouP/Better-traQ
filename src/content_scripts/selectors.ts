// regex %\.\w+ >% >%

import eHomeCh from './conditions/eHomeCh';

const navigationSelector = (n: number) =>
  `#app > div > div > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(${n})`;

// const channelViewNthLatestMessage = (n: number) =>
// `#app > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-last-child(${n})`;
const channelViewNthLatestMessage = (n: number) =>
  `div[class*=viewport] > div:nth-last-child(${n})`;

const navigationBarActivityButton = (n: number) =>
  `#app > div > div > div > div > div > div > div > div > div > button:nth-child(${n})`;

const channelViewMessageTool = (n: number) =>
  `#app > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > svg:nth-child(${n})`;

const channelViewContextMenuNthChild = (n: number) =>
  `#message-menu-popup > div > div > span:nth-child(${n})`;

const channelViewContextMenuNthLastChild = (n: number) =>
  `#message-menu-popup > div > div > span:nth-last-child(${n})`;

/**
 * コンテキストメニューが自分のメッセージのものかどうか
 */
const ifMyMessageContextMenu = (): boolean =>
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
      ? '#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1)'
      : null,
  navigationBarHomeTopUnreadCh: () =>
    eHomeCh()
      ? '#app > div > div > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)' // ホームチャンネルが存在する場合は2番目
      : '#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)', // ホームチャンネルが存在しない場合は1番目
  navigationBarHomeBottomUnreadCh: () =>
    eHomeCh()
      ? '#app > div > div > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(3) > div:nth-last-child(1) > div:nth-child(1)' // ホームチャンネルが存在する場合は2番目
      : '#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(3) > div:nth-last-child(1) > div:nth-child(1)', // ホームチャンネルが存在しない場合は1番目
  tcTab: () => navigationSelector(3),
  navigationBarChannelsChFilterInput: () =>
    '#app > div > div > div > div > div > div > div > div > div > div > div > div > input',
  navigationBarChannelsChFilterStar: () =>
    '#app > div > div > div > div > div > div > div > div > div > div > button',
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
  navigationBarActivityLatestMessage: () =>
    '#app > div > div > div > div > div > div > div > div > div:nth-child(2) > a:nth-child(1) > div',
  tuTab: () => navigationSelector(5),
  navigationBarUsersUserFilterInput: () =>
    '#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div > input',
  navigationBarUsersUserList: () =>
    '#app > div > div > div > div > div > div > div > div > div > div:nth-child(3)',
  tClipTab: () => navigationSelector(6),
  channelHeaderChName: () =>
    '#header > header > div > h2 > div > div:nth-child(1)',
  // channelViewMessageList: () =>
  //   '#app > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(1)',
  channelViewBackground: () =>
    '#app > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)',
  channelViewFilterContainer: () =>
    '#app > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)',
  channelViewMessageList: () => 'div[class*=viewport]',
  channelViewLatestMessage: () => channelViewNthLatestMessage(1),
  channelView2ndLatestMessage: () => channelViewNthLatestMessage(2),
  channelView3rdLatestMessage: () => channelViewNthLatestMessage(3),
  channelView4thLatestMessage: () => channelViewNthLatestMessage(4),
  channelView5thLatestMessage: () => channelViewNthLatestMessage(5),
  channelView6thLatestMessage: () => channelViewNthLatestMessage(6),
  channelView7thLatestMessage: () => channelViewNthLatestMessage(7),
  channelView8thLatestMessage: () => channelViewNthLatestMessage(8),
  channelView9thLatestMessage: () => channelViewNthLatestMessage(9),
  channelViewMessageToolStamp: () => channelViewMessageTool(1),
  channelViewMessageToolDots: () => channelViewMessageTool(2),
  channelViewContextMenuList: () => '#message-menu-popup > div > div',
  channelViewContextMenuRemovePin: () => channelViewContextMenuNthChild(1),
  channelViewContextMenuAddPin: () => channelViewContextMenuNthChild(1),
  channelViewContextMenuClipMessage: () => channelViewContextMenuNthChild(2),
  channelViewContextMenuEditMessage: () =>
    ifMyMessageContextMenu() ? channelViewContextMenuNthChild(3) : null,
  channelViewContextMenuCopyLink: () =>
    ifMyMessageContextMenu()
      ? channelViewContextMenuNthChild(4)
      : channelViewContextMenuNthChild(3),
  channelViewContextMenuEmbedMessage: () =>
    ifMyMessageContextMenu()
      ? channelViewContextMenuNthChild(5)
      : channelViewContextMenuNthChild(4),
  channelViewContextMenuCopyMarkdown: () =>
    ifMyMessageContextMenu()
      ? channelViewContextMenuNthLastChild(2)
      : channelViewContextMenuNthLastChild(1),
  channelViewContextMenuDeleteMessage: () =>
    ifMyMessageContextMenu() ? channelViewContextMenuNthLastChild(1) : null,
  channelViewMessageInput: () =>
    '#app > div > div > div > div > div > div > div > div > div > div > div > div > div > div > textarea',
  channelViewMessageInputStampButton: () =>
    '#app > div > div > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(3) > div[title=スタンプを挿入]',
  sidebarOpener: () => '#sidebar-opener > div > svg',
  sidebarCloser: () =>
    '#app > div > div > div > div > div > div > div > div > div > div > div > button > div',
  sidebarContentViewers: () =>
    '#app > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)',
};

export default selectors;
