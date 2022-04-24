const defaultTasks: Task[] = [
  {
    name: '戻る',
    keybind: [{ key: 'r', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickPreviousPage'],
  },
  {
    name: '進む',
    keybind: [{ key: 't', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickNextPage'],
  },
  {
    name: 'ホームタブをクリック',
    keybind: [{ key: 'q', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickNavigationSelectorHomeTab'],
  },
  {
    name: 'ホームチャンネルをクリック',
    keybind: [{ key: 'w', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickNavigationBarHomeHomeChannel'],
  },
  {
    name: 'トップ未読チャンネルをクリック',
    keybind: [{ key: 'e', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickNavigationBarHomeTopUnreadChannel'],
  },
  {
    name: 'チャンネルタブをクリック',
    keybind: [{ key: 'a', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickNavigationSelectorChannelsTab'],
  },
  {
    name: '現在のチャンネルまでツリーを展開',
    keybind: [{ key: 'A', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickNavigationBarChannelsExpandTreeToCurrentChannel'],
  },
  {
    name: '次のチャンネルをクリック',
    keybind: [{ key: 'u', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickNavigationBarChannelsNextChannel'],
  },
  {
    name: '前のチャンネルをクリック',
    keybind: [{ key: 'i', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickNavigationBarChannelsPreviousChannel'],
  },
  {
    name: '現在のチャンネルの展開/折りたたみ',
    keybind: [{ key: 'o', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickNavigationBarChannelsChannelSelectedChannelHash'],
  },
  {
    name: 'チャンネルフィルターにフォーカス',
    keybind: [{ key: 's', condition: '!isSelectedInputOrTextarea' }],
    action: ['focusNavigationBarChannelsChannelFilterInput'],
  },
  {
    name: 'ユーザーフィルターにフォーカス',
    keybind: [{ key: 'S', condition: '!isSelectedInputOrTextarea' }],
    action: ['focusNavigationBarUsersUserFilterInput'],
  },
  {
    name: '親チャンネル名をクリック',
    keybind: [{ key: 'd', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickChannelHeaderChannelNameParentChannelName'],
  },
  {
    name: 'チャンネルフィルターにフォーカスして、現在のチャンネルを入力',
    keybind: [{ key: 'f', condition: '!isSelectedInputOrTextarea' }],
    action: [
      'focusNavigationBarChannelsChannelFilterInput',
      'inputCurrentChannelNameNavigationBarChannelsChannelFilter',
    ],
  },
  {
    name: 'チャンネルフィルターのスターをクリック',
    keybind: [{ key: 'g', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickNavigationBarChannelsChannelFilterStar'],
  },
  {
    name: 'アクティビティタブをクリック',
    keybind: [{ key: 'z', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickNavigationSelectorActivityTab'],
  },
  {
    name: '「通知/未読購読チャンネルのみを表示」をクリック',
    keybind: [{ key: 'x', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickNavigationBarActivityIsNotAllToggleButton'],
  },
  {
    name: '「同じチャンネルでは一つしかメッセージを表示しない」をクリック',
    keybind: [{ key: 'c', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickNavigationBarActivityIsPerChannelToggleButton'],
  },
  {
    name: 'アクティビティのフォーローモードのトグル',
    keybind: [{ key: '-', condition: '!isSelectedInputOrTextarea' }],
    action: ['toggleNavigationBarActivityFollowMode'],
  },
  {
    name: 'メッセージ入力欄にフォーカス',
    keybind: [{ key: 'n', condition: '!isSelectedInputOrTextarea' }],
    action: ['focusChannelViewMessageInput'],
  },
  {
    name: 'スタンプピッカーを開く',
    keybind: [{ key: 'm', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickChannelViewMessageInputStampButton'],
  },
  {
    name: '最新のメッセージを編集',
    keybind: [{ key: 'ArrowUp', condition: 'isSelectedInputOrTextarea' }],
    action: ['clickChannelViewLatestMessageContextMenuEditMessage'],
  },
  {
    name: '次のメッセージを選択',
    keybind: [{ key: 'j', condition: '!isSelectedInputOrTextarea' }],
    action: ['mouseoverChannelViewMessageListNextMessage'],
  },
  {
    name: '前のメッセージを選択',
    keybind: [{ key: 'k', condition: '!isSelectedInputOrTextarea' }],
    action: ['mouseoverChannelViewMessageListPreviousMessage'],
  },
  {
    name: '一番下までスクロール',
    keybind: [{ key: 'b', condition: '!isSelectedInputOrTextarea' }],
    action: ['scrollToBottomOfChannelView'],
  },
  {
    name: '最新のメッセージのスタンプピッカーを開く',
    keybind: [{ key: 'p', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickChannelViewLatestMessageStampPicker'],
  },
  {
    name: 'サイドバーのトグル',
    keybind: [{ key: 'l', condition: '!isSelectedInputOrTextarea' }],
    action: ['toggleSidebar'],
  },
  {
    name: '選択したメッセージのスポイラーをクリック',
    keybind: [{ key: '@', condition: '!isSelectedInputOrTextarea' }],
    action: ['clickSpoilersOfSelectedMessage'],
  },
  {
    name: 'フォーカスを外す',
    keybind: [{ key: 'Escape', condition: 'isSelectedInputOrTextarea' }],
    action: ['blurActiveInputElement'],
  },
];

export default defaultTasks;
