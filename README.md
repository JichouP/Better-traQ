# Better-traQ

[![CodeQL](https://github.com/JichouP/Better-traQ/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/JichouP/Better-traQ/actions/workflows/codeql-analysis.yml)

Better traQ は traQ をキーボードのみで操作することを目指して作られた拡張機能です。

![screenshot](https://raw.githubusercontent.com/JichouP/Better-traQ/master/screenshot/screenshot.png)

## Install

### Google Chrome / Edge

[Better traQ ― chrome ウェブストア](https://chrome.google.com/webstore/etail/better-traq/hojfibacpmpjkajifooeclgkdfogehej)  
[Better ex-traQ ― chrome ウェブストア](https://chrome.google.com/webstore/detail/better-ex-traq/fjpoplgpdijjllnbplfhckgmgjcepemj)

### Firefox

[Github Release](https://github.com/JichouP/Better-traQ/releases/latest) から `.xpi` をインストールしてください。

## Build (for Firefox)

```bash
# Install Dependencies
pnpm install

# Build
pnpm build:traQ:firefox # for Better traQ
# or
pnpm build:ex-traQ:firefox # for Better ex-traQ
```
