# Better-traQ

![CI](https://github.com/JichouP/Better-traQ/workflows/CI/badge.svg) ![coverage](coverage/badge-branches.svg)

An Extension that Makes traQ Useful

## Key Bindings

### ホーム

Q ホーム  
W ホームチャンネル  
E 次の未読チャンネル

### チャンネル

A チャンネル  
Shift + A 現チャンネルまで展開  
S 検索  
D 上位階層へ  
F 下位階層の検索  
G お気に入り  
R 前のチャンネルへ  
T 次のチャンネルへ  
I 1 つ上へチャンネル移動  
U 1 つ下へチャンネル移動  
O チャンネルツリー展開/折りたたみ

### アクティビティ

Z アクティビティ  
X 通知チャンネルのみ  
C 一つのメッセージのみ  
\- ウォッチモード ON/OFF

### メッセージ

J 1 つ下にスクロール  
K 1 つ上にスクロール  
B 一番下にスクロール  
P 選択したメッセージのスタンプピッカー  
N 新規メッセージ  
M スタンプピッカー  
H スタンプピッカーにフォーカス

### その他

L サイドバー  
0~9 設定したチャンネルへ移動  
Esc テキストエリアの選択を解除

## Contribution

Please make the Issue(s) first. Japanese is fine.

### Setup

```shell
git clone git@github.com:JichouP/Better-traQ.git
cd Better-traQ
npm i
cp example.env-cmdrc .env-cmdrc
```

### Build

```shell
# build for both traQ and ex-traQ
npm run build:both

# build for each target
npm run build:traQ
npm run build:ex-traQ
```
