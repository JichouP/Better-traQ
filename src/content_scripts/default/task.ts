const defaultTasks: Task[] = [
  {
    name: '戻る',
    keybinds: [
      {
        key: 'r',
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickPreviousPage'],
  },
  {
    name: '進む',
    keybinds: [
      {
        key: 't',
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickNextPage'],
  },
  {
    name: 'ホームタブをクリック',
    keybinds: [
      {
        key: 'q',
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['scrollTopOfNavigationBar', 'clickNavigationSelectorHomeTab'],
  },
  {
    name: 'ホームチャンネルをクリック',
    keybinds: [
      {
        key: 'w',
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: [
      'scrollTopOfNavigationBar',
      'clickNavigationSelectorHomeTab',
      'clickNavigationBarHomeHomeChannel',
    ],
  },
  {
    name: 'トップ未読チャンネルをクリック',
    keybinds: [
      {
        key: 'e',
        conditions: ['notIsSelectedInputOrTextarea'],
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
        conditions: ['notIsSelectedInputOrTextarea'],
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
        conditions: ['notIsSelectedInputOrTextarea'],
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
        conditions: ['notIsSelectedInputOrTextarea'],
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
        conditions: ['notIsSelectedInputOrTextarea'],
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
        conditions: ['notIsSelectedInputOrTextarea'],
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
        conditions: ['notIsSelectedInputOrTextarea'],
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
        conditions: ['notIsSelectedInputOrTextarea'],
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
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickChannelHeaderChannelNameParentChannelName'],
  },
  {
    name: 'チャンネルフィルターにフォーカスして、現在のチャンネルを入力',
    keybinds: [
      {
        key: 'f',
        conditions: ['notIsSelectedInputOrTextarea'],
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
        conditions: ['notIsSelectedInputOrTextarea'],
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
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['scrollTopOfNavigationBar', 'clickNavigationSelectorActivityTab'],
  },
  {
    name: '「通知/未読購読チャンネルのみを表示」をクリック',
    keybinds: [
      {
        key: 'x',
        conditions: ['notIsSelectedInputOrTextarea'],
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
        conditions: ['notIsSelectedInputOrTextarea'],
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
        conditions: ['notIsSelectedInputOrTextarea'],
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
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['focusChannelViewMessageInput'],
  },
  {
    name: 'スタンプピッカーを開く',
    keybinds: [
      {
        key: 'm',
        conditions: ['notIsSelectedInputOrTextarea'],
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
          'isSelectedInputOrTextarea',
          'isSelectedInputOrTextareaEmpty',
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
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['mouseoverChannelViewMessageListNextMessage'],
  },
  {
    name: '前のメッセージを選択',
    keybinds: [
      {
        key: 'k',
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['mouseoverChannelViewMessageListPreviousMessage'],
  },
  {
    name: '一番下までスクロール',
    keybinds: [
      {
        key: 'b',
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['scrollToBottomOfChannelView'],
  },
  {
    name: '最新のメッセージのスタンプピッカーを開く',
    keybinds: [
      {
        key: 'p',
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickChannelViewLatestMessageStampPicker'],
  },
  {
    name: 'サイドバーを開く',
    keybinds: [
      {
        key: 'l',
        conditions: ['notIsSelectedInputOrTextarea', 'notIsOpenSidebar'],
      },
    ],
    actions: ['clickSidebarOpener'],
  },
  {
    name: 'サイドバーを閉じる',
    keybinds: [
      {
        key: 'l',
        conditions: ['notIsSelectedInputOrTextarea', 'isOpenSidebar'],
      },
    ],
    actions: ['clickSidebarCloser'],
  },
  {
    name: '閲覧者を開く/閉じる',
    keybinds: [
      {
        key: ';',
        conditions: ['notIsSelectedInputOrTextarea', 'isOpenSidebar'],
      },
    ],
    actions: ['clickSidebarContentViewers'],
  },
  {
    name: '選択したメッセージのスポイラーをクリック',
    keybinds: [
      {
        key: '@',
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickSpoilersOfSelectedMessage'],
  },
  {
    name: 'フォーカスを外す',
    keybinds: [
      {
        key: 'Escape',
        conditions: ['isSelectedInputOrTextarea'],
      },
    ],
    actions: ['blurActiveInputElement'],
  },
  {
    name: 'すべての Message Tool を閉じる',
    keybinds: [
      {
        key: 'Escape',
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['mouseleaveChannelViewAllMessages'],
  },
];

export default defaultTasks;
