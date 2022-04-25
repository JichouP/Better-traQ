const defaultTasks: Task[] = [
  {
    name: '戻る',
    keybinds: [{ key: 'r', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickPreviousPage'],
  },
  {
    name: '進む',
    keybinds: [{ key: 't', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickNextPage'],
  },
  {
    name: 'ホームタブをクリック',
    keybinds: [{ key: 'q', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickNavigationSelectorHomeTab'],
  },
  {
    name: 'ホームチャンネルをクリック',
    keybinds: [{ key: 'w', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickNavigationBarHomeHomeChannel'],
  },
  {
    name: 'トップ未読チャンネルをクリック',
    keybinds: [{ key: 'e', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickNavigationBarHomeTopUnreadChannel'],
  },
  {
    name: 'チャンネルタブをクリック',
    keybinds: [{ key: 'a', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickNavigationSelectorChannelsTab'],
  },
  {
    name: '現在のチャンネルまでツリーを展開',
    keybinds: [{ key: 'A', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickNavigationBarChannelsExpandTreeToCurrentChannel'],
  },
  {
    name: '次のチャンネルをクリック',
    keybinds: [{ key: 'u', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickNavigationBarChannelsNextChannel'],
  },
  {
    name: '前のチャンネルをクリック',
    keybinds: [{ key: 'i', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickNavigationBarChannelsPreviousChannel'],
  },
  {
    name: '現在のチャンネルの展開/折りたたみ',
    keybinds: [{ key: 'o', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickNavigationBarChannelsChannelSelectedChannelHash'],
  },
  {
    name: 'チャンネルフィルターにフォーカス',
    keybinds: [{ key: 's', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['focusNavigationBarChannelsChannelFilterInput'],
  },
  {
    name: 'ユーザーフィルターにフォーカス',
    keybinds: [{ key: 'S', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['focusNavigationBarUsersUserFilterInput'],
  },
  {
    name: '親チャンネル名をクリック',
    keybinds: [{ key: 'd', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickChannelHeaderChannelNameParentChannelName'],
  },
  {
    name: 'チャンネルフィルターにフォーカスして、現在のチャンネルを入力',
    keybinds: [{ key: 'f', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: [
      'focusNavigationBarChannelsChannelFilterInput',
      'inputCurrentChannelNameNavigationBarChannelsChannelFilter',
    ],
  },
  {
    name: 'チャンネルフィルターのスターをクリック',
    keybinds: [{ key: 'g', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickNavigationBarChannelsChannelFilterStar'],
  },
  {
    name: 'アクティビティタブをクリック',
    keybinds: [{ key: 'z', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickNavigationSelectorActivityTab'],
  },
  {
    name: '「通知/未読購読チャンネルのみを表示」をクリック',
    keybinds: [{ key: 'x', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickNavigationBarActivityIsNotAllToggleButton'],
  },
  {
    name: '「同じチャンネルでは一つしかメッセージを表示しない」をクリック',
    keybinds: [{ key: 'c', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickNavigationBarActivityIsPerChannelToggleButton'],
  },
  {
    name: 'アクティビティのフォーローモードのトグル',
    keybinds: [{ key: '-', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['toggleNavigationBarActivityFollowMode'],
  },
  {
    name: 'メッセージ入力欄にフォーカス',
    keybinds: [{ key: 'n', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['focusChannelViewMessageInput'],
  },
  {
    name: 'スタンプピッカーを開く',
    keybinds: [{ key: 'm', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickChannelViewMessageInputStampButton'],
  },
  {
    name: '最新のメッセージを編集',
    keybinds: [{ key: 'ArrowUp', conditions: ['isSelectedInputOrTextarea'] }],
    actions: ['clickChannelViewLatestMessageContextMenuEditMessage'],
  },
  {
    name: '次のメッセージを選択',
    keybinds: [{ key: 'j', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['mouseoverChannelViewMessageListNextMessage'],
  },
  {
    name: '前のメッセージを選択',
    keybinds: [{ key: 'k', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['mouseoverChannelViewMessageListPreviousMessage'],
  },
  {
    name: '一番下までスクロール',
    keybinds: [{ key: 'b', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['scrollToBottomOfChannelView'],
  },
  {
    name: '最新のメッセージのスタンプピッカーを開く',
    keybinds: [{ key: 'p', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickChannelViewLatestMessageStampPicker'],
  },
  {
    name: 'サイドバーのトグル',
    keybinds: [{ key: 'l', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['toggleSidebar'],
  },
  {
    name: '選択したメッセージのスポイラーをクリック',
    keybinds: [{ key: '@', conditions: ['!isSelectedInputOrTextarea'] }],
    actions: ['clickSpoilersOfSelectedMessage'],
  },
  {
    name: 'フォーカスを外す',
    keybinds: [{ key: 'Escape', conditions: ['isSelectedInputOrTextarea'] }],
    actions: ['blurActiveInputElement'],
  },
];

export default defaultTasks;
