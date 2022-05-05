import selectors from '@/content_scripts/selectors';

const getCurrentChNames = () => {
  // Header のチャンネル名の親要素を取得
  const channelNameSelector = selectors.channelHeaderChName();
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
  const currentChName = channelNameEl.lastElementChild?.innerHTML;
  if (!currentChName) return;
  // チャンネル名を返す
  channelNames.push(currentChName);
  return channelNames;
};

export default getCurrentChNames;
