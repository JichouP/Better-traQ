# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com),
and this project adheres to [Semantic Versioning](https://semver.org).

## [3.0.2] - 2022-??-??

### Added

- [全環境] チャンネル入力時に、Enter キーで検索結果の一番上のチャンネルに飛ぶ機能を追加 [#58](https://github.com/JichouP/Better-traQ/issues/58)
- [全環境] チャンネル/ユーザー検索にフォーカスしているかどうかを判定する条件を追加 [#56](https://github.com/JichouP/Better-traQ/issues/56)
- [全環境] スタンプ詳細のプルダウンのクリックを追加 [#54](https://github.com/JichouP/Better-traQ/issues/54)

### Changed

- [全環境] 条件の名前を変更 [#51](https://github.com/JichouP/Better-traQ/issues/51) [#60](https://github.com/JichouP/Better-traQ/issues/60)
  - `homeChannelExists` → `existHomeChannel`
  - `notHomeChannelExists` → `notExistHomeChannel`
  - `unreadChannelExists` → `existUnreadChannel`
  - `notUnreadChannelExists` → `notExistUnreadChannel`
  - `clickNavigationBarChannelsChannelCurrentChannelHash` → `clickNavigationBarChannelsCurrentChannelHash`
- [全環境] デフォルトのタスク設定を未読消化ボタンが最後ホームに戻ってくるように変更 [#3](https://github.com/JichouP/Better-traQ/issues/3)

### Fixed

## [3.0.1](https://github.com/JichouP/Better-traQ/releases/tag/v3.0.1) - 2022-05-01

### Fixed

- [全環境] ドキュメントの更新 [#40](https://github.com/JichouP/Better-traQ/issues/40)
- [全環境] キーバインドの表記ゆれの解消 [#39](https://github.com/JichouP/Better-traQ/issues/39)
- [全環境] 更新履歴ページを CHANGELOG.md に移動 [#36](https://github.com/JichouP/Better-traQ/issues/36)
- [Firefox] Firefox で拡張機能のアイコンが表示されない問題を修正 [#34](https://github.com/JichouP/Better-traQ/issues/34)

## [3.0.0](https://github.com/JichouP/Better-traQ/releases/tag/v3.0.0) - 2022-05-01

### Added

- [全環境] タスクのカスタマイズ機能を追加 [#10](https://github.com/JichouP/Better-traQ/issues/10)
- [全環境] Options ページを追加 [#9](https://github.com/JichouP/Better-traQ/issues/9)
- [Firefox, Edge] Chrome に加えて、Firefox と Edge もサポート

### Changed

- [Chrome, Edge] Manifest を v2 から v3 に移行

### Removed

- [全環境] Popup ページを削除
