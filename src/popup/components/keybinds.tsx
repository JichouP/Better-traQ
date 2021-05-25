import {
  Home,
  AmpStories,
  FlashOn,
  Send,
  DoubleArrow,
  LowPriority,
} from '@material-ui/icons';
import React from 'react';

export const keybinds: KeybindGroupProps[] = [
  {
    groupDescription: 'ホーム',
    groupIcon: <Home style={{ fontSize: '1.2rem', verticalAlign: -3 }} />,
    keybinds: [
      { description: 'ホーム', keybind: 'q' },
      { description: 'ホームチャンネル', keybind: 'w' },
      { description: '次の未読チャンネル', keybind: 'e' },
    ],
  },
  {
    groupDescription: 'チャンネル',
    groupIcon: <AmpStories style={{ fontSize: '1.2rem', verticalAlign: -3 }} />,
    keybinds: [
      { description: 'チャンネル', keybind: 'a' },
      { description: '現在地までツリー展開', keybind: 'Shift + A' },
      { description: '検索', keybind: 's' },
      { description: '一つ親のチャンネルを開く', keybind: 'd' },
      { description: '現チャンネルの下位階層の検索', keybind: 'f' },
      { description: 'お気に入り', keybind: 'd' },
      { description: '一つ上/下のチャンネルに移動', keybind: 'u/i' },
      { description: 'ツリー展開/折りたたみ', keybind: 'v' },
      { description: '前/次のチャンネルへ', keybind: 'r/t' },
    ],
  },
  {
    groupDescription: 'アクティビティ',
    groupIcon: <FlashOn style={{ fontSize: '1.2rem', verticalAlign: -3 }} />,
    keybinds: [
      { description: 'アクティビティ', keybind: 'z' },
      { description: '通知チャンネルのみ', keybind: 'x' },
      { description: '一つのメッセージのみ', keybind: 'c' },
    ],
  },
  {
    groupDescription: 'メッセージ',
    groupIcon: <Send style={{ fontSize: '1.2rem', verticalAlign: -3 }} />,
    keybinds: [
      { description: '新規メッセージ', keybind: 'n' },
      { description: '編集', keybind: 'ArrowUp' },
      { description: 'スタンプピッカー', keybind: 'm' },
      { description: '先頭のスタンプを押す', keybind: 'Space' },
      { description: '一番下にスクロール', keybind: 'b' },
      { description: 'スタンプ検索', keybind: 'h' },
      { description: '一つ下/上のメッセージを選択', keybind: 'j/k' },
      { description: '選択したメッセージのスタンプピッカー', keybind: 'p' },
      { description: 'ウォッチモード On/Off', keybind: '-' },
      {
        description: '選択したメッセージのスポイラーを開く/閉じる',
        keybind: '@',
      },
    ],
  },
  {
    groupIcon: (
      <DoubleArrow
        style={{
          fontSize: '1.2rem',
          verticalAlign: -2,
          transform: 'rotate(180deg)',
        }}
      />
    ),
    groupDescription: 'サイドバー',
    keybinds: [
      { description: 'サイドバー', keybind: 'l' },
      { description: '閲覧者', keybind: ';' },
    ],
  },
  {
    groupDescription: 'その他',
    groupIcon: (
      <LowPriority style={{ fontSize: '1.2rem', verticalAlign: -3 }} />
    ),
    keybinds: [
      { description: 'チャンネル移動', keybind: '0～9' },
      { description: 'テキストエリアの選択を解除', keybind: 'Escape' },
    ],
  },
];
