const defaultTasks: Task[] = [
  {
    name: '戻る',
    keybinds: [
      {
        key: 'r',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
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
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
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
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickNavigationSelectorHomeTab'],
  },
  {
    name: 'ホームチャンネルをクリック',
    keybinds: [
      {
        key: 'w',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickNavigationBarHomeHomeChannel'],
  },
  {
    name: 'トップ未読チャンネルをクリック',
    keybinds: [
      {
        key: 'e',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickNavigationBarHomeTopUnreadChannel'],
  },
  {
    name: 'チャンネルタブをクリック',
    keybinds: [
      {
        key: 'a',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickNavigationSelectorChannelsTab'],
  },
  {
    name: '現在のチャンネルまでツリーを展開',
    keybinds: [
      {
        key: 'A',
        shiftKey: true,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickNavigationBarChannelsExpandTreeToCurrentChannel'],
  },
  {
    name: '次のチャンネルをクリック',
    keybinds: [
      {
        key: 'u',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickNavigationBarChannelsNextChannel'],
  },
  {
    name: '前のチャンネルをクリック',
    keybinds: [
      {
        key: 'i',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickNavigationBarChannelsPreviousChannel'],
  },
  {
    name: '現在のチャンネルの展開/折りたたみ',
    keybinds: [
      {
        key: 'o',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickNavigationBarChannelsChannelSelectedChannelHash'],
  },
  {
    name: 'チャンネルフィルターにフォーカス',
    keybinds: [
      {
        key: 's',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['focusNavigationBarChannelsChannelFilterInput'],
  },
  {
    name: 'ユーザーフィルターにフォーカス',
    keybinds: [
      {
        key: 'S',
        shiftKey: true,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['focusNavigationBarUsersUserFilterInput'],
  },
  {
    name: '親チャンネル名をクリック',
    keybinds: [
      {
        key: 'd',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
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
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: [
      'focusNavigationBarChannelsChannelFilterInput',
      'inputCurrentChannelNameNavigationBarChannelsChannelFilter',
    ],
  },
  {
    name: 'チャンネルフィルターのスターをクリック',
    keybinds: [
      {
        key: 'g',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickNavigationBarChannelsChannelFilterStar'],
  },
  {
    name: 'アクティビティタブをクリック',
    keybinds: [
      {
        key: 'z',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickNavigationSelectorActivityTab'],
  },
  {
    name: '「通知/未読購読チャンネルのみを表示」をクリック',
    keybinds: [
      {
        key: 'x',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickNavigationBarActivityIsNotAllToggleButton'],
  },
  {
    name: '「同じチャンネルでは一つしかメッセージを表示しない」をクリック',
    keybinds: [
      {
        key: 'c',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickNavigationBarActivityIsPerChannelToggleButton'],
  },
  {
    name: 'アクティビティのフォーローモードのトグル',
    keybinds: [
      {
        key: '-',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['toggleNavigationBarActivityFollowMode'],
  },
  {
    name: 'メッセージ入力欄にフォーカス',
    keybinds: [
      {
        key: 'n',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
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
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
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
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['isSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickChannelViewLatestMessageContextMenuEditMessage'],
  },
  {
    name: '次のメッセージを選択',
    keybinds: [
      {
        key: 'j',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
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
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
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
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
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
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['clickChannelViewLatestMessageStampPicker'],
  },
  {
    name: 'サイドバーのトグル',
    keybinds: [
      {
        key: 'l',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['notIsSelectedInputOrTextarea'],
      },
    ],
    actions: ['toggleSidebar'],
  },
  {
    name: '選択したメッセージのスポイラーをクリック',
    keybinds: [
      {
        key: '@',
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
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
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        conditions: ['isSelectedInputOrTextarea'],
      },
    ],
    actions: ['blurActiveInputElement'],
  },
];

export default defaultTasks;
