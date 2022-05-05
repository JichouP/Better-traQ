const defaultTasks: Task[] = [
  {
    name: '戻る',
    keybinds: [
      {
        key: 'r',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['cPrevPage'],
  },
  {
    name: '進む',
    keybinds: [
      {
        key: 't',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['cNextPage'],
  },
  {
    name: 'ホームタブ',
    keybinds: [
      {
        key: 'q',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cTHTab'],
  },
  {
    name: 'ホームチャンネル',
    keybinds: [
      {
        key: 'w',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cTHTab', 'cNHHomeCh'],
  },
  {
    name: 'ホームチャンネル（未読チャンネルがない場合）',
    keybinds: [
      {
        key: 'e',
        conditions: ['niFInputOrTextarea', 'eHomeCh', 'neUnreadCh'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cNHHomeCh'],
  },
  {
    name: '最新未読チャンネル',
    keybinds: [
      {
        key: 'e',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cTHTab', 'cNHTopUnreadCh'],
  },
  {
    name: 'チャンネルタブ',
    keybinds: [
      {
        key: 'a',
        conditions: ['niFInputOrTextarea'],
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
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['cTCTab', 'eNCTreeToCurrentCh', 'sleep100ms', 'sNCToCurrentCh'],
  },
  {
    name: '次のチャンネル',
    keybinds: [
      {
        key: 'u',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['cTCTab', 'eNCTreeToCurrentCh', 'cNCNextCh', 'sNCToCurrentCh'],
  },
  {
    name: '前のチャンネル',
    keybinds: [
      {
        key: 'i',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['cTCTab', 'eNCTreeToCurrentCh', 'cNCPrevCh', 'sNCToCurrentCh'],
  },
  {
    name: '現在のチャンネルの展開/折りたたみ',
    keybinds: [
      {
        key: 'o',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['cNCCurrentChHash', 'sNCToCurrentCh'],
  },
  {
    name: 'チャンネル検索',
    keybinds: [
      {
        key: 's',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cTCTab', 'fNCChFilterInput'],
  },
  {
    name: 'ユーザー検索',
    keybinds: [
      {
        key: 'S',
        shiftKey: true,
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cTUTab', 'fNUUserFilterInput'],
  },
  {
    name: '親チャンネル',
    keybinds: [
      {
        key: 'd',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['cHParentChName'],
  },
  {
    name: 'チャンネル検索（現在のチャンネルを入力）',
    keybinds: [
      {
        key: 'f',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: [
      'sTopOfNavigationBar',
      'cTCTab',
      'fNCChFilterInput',
      'iCurrentChNameNCChFilter',
    ],
  },
  {
    name: 'お気に入りのみ表示',
    keybinds: [
      {
        key: 'g',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cNCChFilterStar'],
  },
  {
    name: 'アクティビティタブ',
    keybinds: [
      {
        key: 'z',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cTATab'],
  },
  {
    name: '通知/未読購読チャンネルのみを表示',
    keybinds: [
      {
        key: 'x',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cNAIsNotAllToggleButton'],
  },
  {
    name: '同じチャンネルでは一つしかメッセージを表示しない',
    keybinds: [
      {
        key: 'c',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cNAIsPerChToggleButton'],
  },
  {
    name: 'フォローモードのトグル',
    keybinds: [
      {
        key: '-',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['sTopOfNavigationBar', 'cTATab', 'tNAFollowMode'],
  },
  {
    name: '新規メッセージ',
    keybinds: [
      {
        key: 'n',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['fVMessageInput'],
  },
  {
    name: 'スタンプピッカー',
    keybinds: [
      {
        key: 'm',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['cVMessageInputStampButton'],
  },
  {
    name: '最新のメッセージを編集',
    keybinds: [
      {
        key: 'ArrowUp',
        conditions: ['iFInputOrTextarea', 'iFEmptyInputOrTextarea'],
      },
    ],
    actions: ['cVLatestMessageContextMenuEditMessage'],
  },
  {
    name: '次のメッセージ',
    keybinds: [
      {
        key: 'j',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['oVNextMessage'],
  },
  {
    name: '前のメッセージ',
    keybinds: [
      {
        key: 'k',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['oVPrevMessage'],
  },
  {
    name: '一番下までスクロール',
    keybinds: [
      {
        key: 'b',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['sToBottomOfV'],
  },
  {
    name: '最新のメッセージのスタンプピッカーを開く',
    keybinds: [
      {
        key: 'p',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['cVLatestMessageStampPicker'],
  },
  {
    name: 'サイドバーを開く',
    keybinds: [
      {
        key: 'l',
        conditions: ['niFInputOrTextarea', 'niOS'],
      },
    ],
    actions: ['cSOpener'],
  },
  {
    name: 'サイドバーを閉じる',
    keybinds: [
      {
        key: 'l',
        conditions: ['niFInputOrTextarea', 'iOS'],
      },
    ],
    actions: ['cSCloser'],
  },
  {
    name: '閲覧者を開く/閉じる',
    keybinds: [
      {
        key: ';',
        conditions: ['niFInputOrTextarea', 'iOS'],
      },
    ],
    actions: ['cSContentViewers'],
  },
  {
    name: '選択したメッセージのスポイラー',
    keybinds: [
      {
        key: '@',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['cVSelectedMessageSpoilers'],
  },
  {
    name: '選択したメッセージのスタンプ詳細のプルダウン',
    keybinds: [
      {
        key: 'v',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['cVSelectedMessageDetailButton'],
  },
  {
    name: '選択したメッセージのスタンプ',
    keybinds: [
      {
        key: ' ',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['cVSelectedMessageStamps'],
  },
  {
    name: '検索結果の一番上のチャンネル',
    keybinds: [
      {
        key: 'Enter',
        conditions: [
          'iFInputOrTextarea',
          'niFEmptyInputOrTextarea',
          'iFNCChFilterInput',
        ],
      },
    ],
    actions: ['cNCTopSearchResult'],
  },
  {
    name: '検索結果の一番上のチャンネル',
    keybinds: [
      {
        key: 'Enter',
        conditions: [
          'iFInputOrTextarea',
          'niFEmptyInputOrTextarea',
          'iFNUUserFilterInput',
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
        conditions: ['iFInputOrTextarea'],
      },
    ],
    actions: ['bActiveInputElement'],
  },
  {
    name: 'すべての Message Tool を閉じる',
    keybinds: [
      {
        key: 'Escape',
        conditions: ['niFInputOrTextarea'],
      },
    ],
    actions: ['lVAllMessages'],
  },
];

export default defaultTasks;
