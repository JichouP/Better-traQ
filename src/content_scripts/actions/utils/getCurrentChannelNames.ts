import selectors from '@/content_scripts/selectors';

const getCurrentChannelNames = () => {
  // Header のチャンネル名の親要素を取得
  const channelNameSelector = selectors.channelHeaderChannelName();
  if (!channelNameSelector) return;
  const channelNameEl =
    document.querySelector<HTMLDivElement>(channelNameSelector);
  if (!channelNameEl) return;
  // 親チャンネル名のテキストを取得
  // ハッシュマークは削除
  const [, ...channelNames] = [
    ...channelNameEl.querySelectorAll(':scope a'),
  ].map((v) => v.innerHTML);
  // 現在のチャンネル名を取得
  const currentChannelName = channelNameEl.lastElementChild?.innerHTML;
  if (!currentChannelName) return;
  // チャンネル名を返す
  channelNames.push(currentChannelName);
  return channelNames;
};

export default getCurrentChannelNames;
