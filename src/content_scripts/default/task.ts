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
    actions: ['sTopOfNavigationBar', 'cNavigationSelectorHomeTab'],
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
      'sTopOfNavigationBar',
      'cNavigationSelectorHomeTab',
      'cNHHomeChannel',
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
    actions: ['sTopOfNavigationBar', 'cNHHomeChannel'],
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
      'sTopOfNavigationBar',
      'cNavigationSelectorHomeTab',
      'cNHTopUnreadChannel',
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
    actions: ['sTopOfNavigationBar', 'cNavigationSelectorChannelsTab'],
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
      'eNCTreeToCurrentChannel',
      'sleep100ms',
      'sNCToCurrentChannel',
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
      'eNCTreeToCurrentChannel',
      'cNCNextChannel',
      'sNCToCurrentChannel',
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
      'eNCTreeToCurrentChannel',
      'cNCPrevChannel',
      'sNCToCurrentChannel',
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
    actions: ['cNCCurrentChannelHash', 'sNCToCurrentChannel'],
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
      'sTopOfNavigationBar',
      'cNavigationSelectorChannelsTab',
      'fNCChannelFilterInput',
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
      'sTopOfNavigationBar',
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
    actions: ['cHChannelNameParentChannelName'],
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
      'sTopOfNavigationBar',
      'cNavigationSelectorChannelsTab',
      'fNCChannelFilterInput',
      'iCurrentChannelNameNCChannelFilter',
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
    actions: ['sTopOfNavigationBar', 'cNCChannelFilterStar'],
  },
  {
    name: 'アクティビティタブをクリック',
    keybinds: [
      {
        key: 'z',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cNavigationSelectorActivityTab'],
  },
  {
    name: '「通知/未読購読チャンネルのみを表示」をクリック',
    keybinds: [
      {
        key: 'x',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cNAIsNotAllToggleButton'],
  },
  {
    name: '「同じチャンネルでは一つしかメッセージを表示しない」をクリック',
    keybinds: [
      {
        key: 'c',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cNAIsPerChannelToggleButton'],
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
      'sTopOfNavigationBar',
      'cNavigationSelectorActivityTab',
      'tNAFollowMode',
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
    actions: ['fVMessageInput'],
  },
  {
    name: 'スタンプピッカーを開く',
    keybinds: [
      {
        key: 'm',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['cVMessageInputStampButton'],
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
    actions: ['cVLatestMessageContextMenuEditMessage'],
  },
  {
    name: '次のメッセージを選択',
    keybinds: [
      {
        key: 'j',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['oVMessageListNextMessage'],
  },
  {
    name: '前のメッセージを選択',
    keybinds: [
      {
        key: 'k',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['oVMessageListPrevMessage'],
  },
  {
    name: '一番下までスクロール',
    keybinds: [
      {
        key: 'b',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['sToBottomOfV'],
  },
  {
    name: '最新のメッセージのスタンプピッカーを開く',
    keybinds: [
      {
        key: 'p',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['cVLatestMessageStampPicker'],
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
    actions: ['cVSelectedMessageSpoilers'],
  },
  {
    name: '選択したメッセージのスタンプ詳細のプルダウンをクリック',
    keybinds: [
      {
        key: 'v',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['cVSelectedMessageDetailButton'],
  },
  {
    name: '選択したメッセージのスタンプをクリック',
    keybinds: [
      {
        key: ' ',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['cVSelectedMessageStamps'],
  },
  {
    name: 'チャンネルリスト検索結果の一番上のチャンネルをクリック',
    keybinds: [
      {
        key: 'Enter',
        conditions: [
          'isFocusedInputOrTextarea',
          'notIsFocusedEmptyInputOrTextarea',
          'isFocusedNCChannelFilterInput',
        ],
      },
    ],
    actions: ['cNCTopSearchResult'],
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
    actions: ['lVAllMessages'],
  },
];

export default defaultTasks;
