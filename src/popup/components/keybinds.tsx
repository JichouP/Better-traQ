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
      { description: '検索', keybind: 's' },
      { description: 'お気に入り', keybind: 'd' },
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
      { description: 'n番目のスタンプピッカー', keybind: 'p, o, i, u, y, t' },
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
