import selectors from '../selectors';

const clickChannelHeaderChannelNameParentChannelName = () => {
  // Header のチャンネル名の親要素を取得
  const channelNameSelector = selectors.channelHeaderChannelName();
  if (!channelNameSelector) return;
  const channelNameEl =
    document.querySelector<HTMLDivElement>(channelNameSelector);
  if (!channelNameEl) return;
  // 親チャンネル名のテキストを取得
  // ハッシュマークは削除
  const [, ...channelNames] = [
    ...channelNameEl.querySelectorAll<HTMLAnchorElement>(':scope a'),
  ];
  channelNames.at(-1)?.click();
};

export default clickChannelHeaderChannelNameParentChannelName;
