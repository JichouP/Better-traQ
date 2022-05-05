const defaultTasks: Task[] = [
  {
    name: '戻る',
    keybinds: [
      {
        key: 'r',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['cPrevPage'],
  },
  {
    name: '進む',
    keybinds: [
      {
        key: 't',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['cNextPage'],
  },
  {
    name: 'ホームタブをクリック',
    keybinds: [
      {
        key: 'q',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['scrollTopOfNavigationBar', 'cNavigationSelectorHomeTab'],
  },
  {
    name: 'ホームチャンネルをクリック',
    keybinds: [
      {
        key: 'w',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: [
      'scrollTopOfNavigationBar',
      'cNavigationSelectorHomeTab',
      'cNavigationBarHomeHomeChannel',
    ],
  },
  {
    name: 'ホームチャンネルをクリック（未読チャンネルがない場合）',
    keybinds: [
      {
        key: 'e',
        conditions: [
          'notIsFocusedInputOrTextarea',
          'existHomeChannel',
          'notExistUnreadChannel',
        ],
      },
    ],
    actions: ['scrollTopOfNavigationBar', 'cNavigationBarHomeHomeChannel'],
  },
  {
    name: 'トップ未読チャンネルをクリック',
    keybinds: [
      {
        key: 'e',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: [
      'scrollTopOfNavigationBar',
      'cNavigationSelectorHomeTab',
      'cNavigationBarHomeTopUnreadChannel',
    ],
  },
  {
    name: 'チャンネルタブをクリック',
    keybinds: [
      {
        key: 'a',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['scrollTopOfNavigationBar', 'cNavigationSelectorChannelsTab'],
  },
  {
    name: '現在のチャンネルまでツリーを展開',
    keybinds: [
      {
        key: 'A',
        shiftKey: true,
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: [
      'cNavigationSelectorChannelsTab',
      'eNavigationBarChannelsTreeToCurrentChannel',
      'sleep100ms',
      'scrollNavigationBarChannelsToCurrentChannel',
    ],
  },
  {
    name: '次のチャンネルをクリック',
    keybinds: [
      {
        key: 'u',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: [
      'cNavigationSelectorChannelsTab',
      'eNavigationBarChannelsTreeToCurrentChannel',
      'cNavigationBarChannelsNextChannel',
      'scrollNavigationBarChannelsToCurrentChannel',
    ],
  },
  {
    name: '前のチャンネルをクリック',
    keybinds: [
      {
        key: 'i',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: [
      'cNavigationSelectorChannelsTab',
      'eNavigationBarChannelsTreeToCurrentChannel',
      'cNavigationBarChannelsPrevChannel',
      'scrollNavigationBarChannelsToCurrentChannel',
    ],
  },
  {
    name: '現在のチャンネルの展開/折りたたみ',
    keybinds: [
      {
        key: 'o',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: [
      'cNavigationBarChannelsCurrentChannelHash',
      'scrollNavigationBarChannelsToCurrentChannel',
    ],
  },
  {
    name: 'チャンネルフィルターにフォーカス',
    keybinds: [
      {
        key: 's',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: [
      'scrollTopOfNavigationBar',
      'cNavigationSelectorChannelsTab',
      'fNavigationBarChannelsChannelFilterInput',
    ],
  },
  {
    name: 'ユーザーフィルターにフォーカス',
    keybinds: [
      {
        key: 'S',
        shiftKey: true,
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: [
      'scrollTopOfNavigationBar',
      'cNavigationSelectorUsersTab',
      'fNavigationBarUsersUserFilterInput',
    ],
  },
  {
    name: '親チャンネル名をクリック',
    keybinds: [
      {
        key: 'd',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['cChannelHeaderChannelNameParentChannelName'],
  },
  {
    name: 'チャンネルフィルターにフォーカスして、現在のチャンネルを入力',
    keybinds: [
      {
        key: 'f',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: [
      'scrollTopOfNavigationBar',
      'cNavigationSelectorChannelsTab',
      'fNavigationBarChannelsChannelFilterInput',
      'iCurrentChannelNameNavigationBarChannelsChannelFilter',
    ],
  },
  {
    name: 'チャンネルフィルターのスターをクリック',
    keybinds: [
      {
        key: 'g',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: [
      'scrollTopOfNavigationBar',
      'cNavigationBarChannelsChannelFilterStar',
    ],
  },
  {
    name: 'アクティビティタブをクリック',
    keybinds: [
      {
        key: 'z',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['scrollTopOfNavigationBar', 'cNavigationSelectorActivityTab'],
  },
  {
    name: '「通知/未読購読チャンネルのみを表示」をクリック',
    keybinds: [
      {
        key: 'x',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: [
      'scrollTopOfNavigationBar',
      'cNavigationBarActivityIsNotAllToggleButton',
    ],
  },
  {
    name: '「同じチャンネルでは一つしかメッセージを表示しない」をクリック',
    keybinds: [
      {
        key: 'c',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: [
      'scrollTopOfNavigationBar',
      'cNavigationBarActivityIsPerChannelToggleButton',
    ],
  },
  {
    name: 'アクティビティのフォーローモードのトグル',
    keybinds: [
      {
        key: '-',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: [
      'scrollTopOfNavigationBar',
      'cNavigationSelectorActivityTab',
      'toggleNavigationBarActivityFollowMode',
    ],
  },
  {
    name: 'メッセージ入力欄にフォーカス',
    keybinds: [
      {
        key: 'n',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['fChannelViewMessageInput'],
  },
  {
    name: 'スタンプピッカーを開く',
    keybinds: [
      {
        key: 'm',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['cChannelViewMessageInputStampButton'],
  },
  {
    name: '最新のメッセージを編集',
    keybinds: [
      {
        key: 'ArrowUp',
        conditions: [
          'isFocusedInputOrTextarea',
          'isFocusedEmptyInputOrTextarea',
        ],
      },
    ],
    actions: ['cChannelViewLatestMessageContextMenuEditMessage'],
  },
  {
    name: '次のメッセージを選択',
    keybinds: [
      {
        key: 'j',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['mouseoverChannelViewMessageListNextMessage'],
  },
  {
    name: '前のメッセージを選択',
    keybinds: [
      {
        key: 'k',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['mouseoverChannelViewMessageListPrevMessage'],
  },
  {
    name: '一番下までスクロール',
    keybinds: [
      {
        key: 'b',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['scrollToBottomOfChannelView'],
  },
  {
    name: '最新のメッセージのスタンプピッカーを開く',
    keybinds: [
      {
        key: 'p',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['cChannelViewLatestMessageStampPicker'],
  },
  {
    name: 'サイドバーを開く',
    keybinds: [
      {
        key: 'l',
        conditions: ['notIsFocusedInputOrTextarea', 'notIsOpenSidebar'],
      },
    ],
    actions: ['cSidebarOpener'],
  },
  {
    name: 'サイドバーを閉じる',
    keybinds: [
      {
        key: 'l',
        conditions: ['notIsFocusedInputOrTextarea', 'isOpenSidebar'],
      },
    ],
    actions: ['cSidebarCloser'],
  },
  {
    name: '閲覧者を開く/閉じる',
    keybinds: [
      {
        key: ';',
        conditions: ['notIsFocusedInputOrTextarea', 'isOpenSidebar'],
      },
    ],
    actions: ['cSidebarContentViewers'],
  },
  {
    name: '選択したメッセージのスポイラーをクリック',
    keybinds: [
      {
        key: '@',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['cChannelViewSelectedMessageSpoilers'],
  },
  {
    name: '選択したメッセージのスタンプ詳細のプルダウンをクリック',
    keybinds: [
      {
        key: 'v',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['cChannelViewSelectedMessageDetailButton'],
  },
  {
    name: '選択したメッセージのスタンプをクリック',
    keybinds: [
      {
        key: ' ',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['cChannelViewSelectedMessageStamps'],
  },
  {
    name: 'チャンネルリスト検索結果の一番上のチャンネルをクリック',
    keybinds: [
      {
        key: 'Enter',
        conditions: [
          'isFocusedInputOrTextarea',
          'notIsFocusedEmptyInputOrTextarea',
          'isFocusedNavigationBarChannelsChannelFilterInput',
        ],
      },
    ],
    actions: ['cNavigationBarChannelsTopSearchResult'],
  },
  {
    name: 'チャンネルリスト検索結果の一番上のチャンネルをクリック',
    keybinds: [
      {
        key: 'Enter',
        conditions: [
          'isFocusedInputOrTextarea',
          'notIsFocusedEmptyInputOrTextarea',
          'isFocusedNavigationBarUsersUserFilterInput',
        ],
      },
    ],
    actions: ['cNavigationBarUsersTopSearchResult', 'bActiveInputElement'],
  },
  {
    name: 'フォーカスを外す',
    keybinds: [
      {
        key: 'Escape',
        conditions: ['isFocusedInputOrTextarea'],
      },
    ],
    actions: ['bActiveInputElement'],
  },
  {
    name: 'すべての Message Tool を閉じる',
    keybinds: [
      {
        key: 'Escape',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['mouseleaveChannelViewAllMessages'],
  },
];

export default defaultTasks;
