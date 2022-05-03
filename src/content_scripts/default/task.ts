const defaultTasks: Task[] = [
  {
    name: '戻る',
    keybinds: [
      {
        key: 'r',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['clickPreviousPage'],
  },
  {
    name: '進む',
    keybinds: [
      {
        key: 't',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['clickNextPage'],
  },
  {
    name: 'ホームタブをクリック',
    keybinds: [
      {
        key: 'q',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['scrollTopOfNavigationBar', 'clickNavigationSelectorHomeTab'],
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
      'clickNavigationSelectorHomeTab',
      'clickNavigationBarHomeHomeChannel',
    ],
  },
  {
    name: 'トップ未読チャンネルをクリック（）',
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
    actions: ['scrollTopOfNavigationBar', 'clickNavigationBarHomeHomeChannel'],
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
      'clickNavigationSelectorHomeTab',
      'clickNavigationBarHomeTopUnreadChannel',
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
    actions: ['scrollTopOfNavigationBar', 'clickNavigationSelectorChannelsTab'],
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
      'clickNavigationSelectorChannelsTab',
      'expandNavigationBarChannelsTreeToCurrentChannel',
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
      'clickNavigationSelectorChannelsTab',
      'expandNavigationBarChannelsTreeToCurrentChannel',
      'clickNavigationBarChannelsNextChannel',
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
      'clickNavigationSelectorChannelsTab',
      'expandNavigationBarChannelsTreeToCurrentChannel',
      'clickNavigationBarChannelsPreviousChannel',
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
      'clickNavigationBarChannelsChannelCurrentChannelHash',
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
      'clickNavigationSelectorChannelsTab',
      'focusNavigationBarChannelsChannelFilterInput',
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
      'clickNavigationSelectorUsersTab',
      'focusNavigationBarUsersUserFilterInput',
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
    actions: ['clickChannelHeaderChannelNameParentChannelName'],
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
      'clickNavigationSelectorChannelsTab',
      'focusNavigationBarChannelsChannelFilterInput',
      'inputCurrentChannelNameNavigationBarChannelsChannelFilter',
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
      'clickNavigationBarChannelsChannelFilterStar',
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
    actions: ['scrollTopOfNavigationBar', 'clickNavigationSelectorActivityTab'],
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
      'clickNavigationBarActivityIsNotAllToggleButton',
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
      'clickNavigationBarActivityIsPerChannelToggleButton',
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
    actions: ['focusChannelViewMessageInput'],
  },
  {
    name: 'スタンプピッカーを開く',
    keybinds: [
      {
        key: 'm',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['clickChannelViewMessageInputStampButton'],
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
    actions: ['clickChannelViewLatestMessageContextMenuEditMessage'],
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
    actions: ['mouseoverChannelViewMessageListPreviousMessage'],
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
    actions: ['clickChannelViewLatestMessageStampPicker'],
  },
  {
    name: 'サイドバーを開く',
    keybinds: [
      {
        key: 'l',
        conditions: ['notIsFocusedInputOrTextarea', 'notIsOpenSidebar'],
      },
    ],
    actions: ['clickSidebarOpener'],
  },
  {
    name: 'サイドバーを閉じる',
    keybinds: [
      {
        key: 'l',
        conditions: ['notIsFocusedInputOrTextarea', 'isOpenSidebar'],
      },
    ],
    actions: ['clickSidebarCloser'],
  },
  {
    name: '閲覧者を開く/閉じる',
    keybinds: [
      {
        key: ';',
        conditions: ['notIsFocusedInputOrTextarea', 'isOpenSidebar'],
      },
    ],
    actions: ['clickSidebarContentViewers'],
  },
  {
    name: '選択したメッセージのスポイラーをクリック',
    keybinds: [
      {
        key: '@',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['clickChannelViewSelectedMessageSpoilers'],
  },
  {
    name: '選択したメッセージのスタンプをクリック',
    keybinds: [
      {
        key: ' ',
        conditions: ['notIsFocusedInputOrTextarea'],
      },
    ],
    actions: ['clickChannelViewSelectedMessageStamps'],
  },
  {
    name: 'フォーカスを外す',
    keybinds: [
      {
        key: 'Escape',
        conditions: ['isFocusedInputOrTextarea'],
      },
    ],
    actions: ['blurActiveInputElement'],
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
