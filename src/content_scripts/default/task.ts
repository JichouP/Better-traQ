const defaultTasks: Task[] = [
  {
    name: '戻る',
    keybinds: [
      {
        key: 'r',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['cPrevPage'],
  },
  {
    name: '進む',
    keybinds: [
      {
        key: 't',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['cNextPage'],
  },
  {
    name: 'ホームタブをクリック',
    keybinds: [
      {
        key: 'q',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cTHTab'],
  },
  {
    name: 'ホームチャンネルをクリック',
    keybinds: [
      {
        key: 'w',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cTHTab', 'cNHHomeChannel'],
  },
  {
    name: 'ホームチャンネルをクリック（未読チャンネルがない場合）',
    keybinds: [
      {
        key: 'e',
        conditions: [
          'niFocusedInputOrTextarea',
          'eHomeChannel',
          'neUnreadChannel',
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
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cTHTab', 'cNHTopUnreadChannel'],
  },
  {
    name: 'チャンネルタブをクリック',
    keybinds: [
      {
        key: 'a',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cTCTab'],
  },
  {
    name: '現在のチャンネルまでツリーを展開',
    keybinds: [
      {
        key: 'A',
        shiftKey: true,
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: [
      'cTCTab',
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
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: [
      'cTCTab',
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
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: [
      'cTCTab',
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
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['cNCCurrentChannelHash', 'sNCToCurrentChannel'],
  },
  {
    name: 'チャンネルフィルターにフォーカス',
    keybinds: [
      {
        key: 's',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cTCTab', 'fNCChannelFilterInput'],
  },
  {
    name: 'ユーザーフィルターにフォーカス',
    keybinds: [
      {
        key: 'S',
        shiftKey: true,
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cTUTab', 'fNUUserFilterInput'],
  },
  {
    name: '親チャンネル名をクリック',
    keybinds: [
      {
        key: 'd',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['cHChannelNameParentChannelName'],
  },
  {
    name: 'チャンネルフィルターにフォーカスして、現在のチャンネルを入力',
    keybinds: [
      {
        key: 'f',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: [
      'sTopOfNavigationBar',
      'cTCTab',
      'fNCChannelFilterInput',
      'iCurrentChannelNameNCChannelFilter',
    ],
  },
  {
    name: 'チャンネルフィルターのスターをクリック',
    keybinds: [
      {
        key: 'g',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cNCChannelFilterStar'],
  },
  {
    name: 'アクティビティタブをクリック',
    keybinds: [
      {
        key: 'z',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cTATab'],
  },
  {
    name: '「通知/未読購読チャンネルのみを表示」をクリック',
    keybinds: [
      {
        key: 'x',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cNAIsNotAllToggleButton'],
  },
  {
    name: '「同じチャンネルでは一つしかメッセージを表示しない」をクリック',
    keybinds: [
      {
        key: 'c',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cNAIsPerChannelToggleButton'],
  },
  {
    name: 'アクティビティのフォーローモードのトグル',
    keybinds: [
      {
        key: '-',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cTATab', 'tNAFollowMode'],
  },
  {
    name: 'メッセージ入力欄にフォーカス',
    keybinds: [
      {
        key: 'n',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['fVMessageInput'],
  },
  {
    name: 'スタンプピッカーを開く',
    keybinds: [
      {
        key: 'm',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['cVMessageInputStampButton'],
  },
  {
    name: '最新のメッセージを編集',
    keybinds: [
      {
        key: 'ArrowUp',
        conditions: ['iFocusedInputOrTextarea', 'iFocusedEmptyInputOrTextarea'],
      },
    ],
    actions: ['cVLatestMessageContextMenuEditMessage'],
  },
  {
    name: '次のメッセージを選択',
    keybinds: [
      {
        key: 'j',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['oVMessageListNextMessage'],
  },
  {
    name: '前のメッセージを選択',
    keybinds: [
      {
        key: 'k',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['oVMessageListPrevMessage'],
  },
  {
    name: '一番下までスクロール',
    keybinds: [
      {
        key: 'b',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['sToBottomOfV'],
  },
  {
    name: '最新のメッセージのスタンプピッカーを開く',
    keybinds: [
      {
        key: 'p',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['cVLatestMessageStampPicker'],
  },
  {
    name: 'サイドバーを開く',
    keybinds: [
      {
        key: 'l',
        conditions: ['niFocusedInputOrTextarea', 'niOpenS'],
      },
    ],
    actions: ['cSOpener'],
  },
  {
    name: 'サイドバーを閉じる',
    keybinds: [
      {
        key: 'l',
        conditions: ['niFocusedInputOrTextarea', 'iOpenS'],
      },
    ],
    actions: ['cSCloser'],
  },
  {
    name: '閲覧者を開く/閉じる',
    keybinds: [
      {
        key: ';',
        conditions: ['niFocusedInputOrTextarea', 'iOpenS'],
      },
    ],
    actions: ['cSContentViewers'],
  },
  {
    name: '選択したメッセージのスポイラーをクリック',
    keybinds: [
      {
        key: '@',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['cVSelectedMessageSpoilers'],
  },
  {
    name: '選択したメッセージのスタンプ詳細のプルダウンをクリック',
    keybinds: [
      {
        key: 'v',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['cVSelectedMessageDetailButton'],
  },
  {
    name: '選択したメッセージのスタンプをクリック',
    keybinds: [
      {
        key: ' ',
        conditions: ['niFocusedInputOrTextarea'],
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
          'iFocusedInputOrTextarea',
          'niFocusedEmptyInputOrTextarea',
          'iFocusedNCChannelFilterInput',
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
          'iFocusedInputOrTextarea',
          'niFocusedEmptyInputOrTextarea',
          'iFocusedNUUserFilterInput',
        ],
      },
    ],
    actions: ['cNUTopSearchResult', 'bActiveInputElement'],
  },
  {
    name: 'フォーカスを外す',
    keybinds: [
      {
        key: 'Escape',
        conditions: ['iFocusedInputOrTextarea'],
      },
    ],
    actions: ['bActiveInputElement'],
  },
  {
    name: 'すべての Message Tool を閉じる',
    keybinds: [
      {
        key: 'Escape',
        conditions: ['niFocusedInputOrTextarea'],
      },
    ],
    actions: ['lVAllMessages'],
  },
];

export default defaultTasks;
