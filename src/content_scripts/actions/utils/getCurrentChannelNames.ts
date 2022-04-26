import selectors from '@/content_scripts/selectors';

const getCurrentChannelNames = () => {
  // Header のチャンネル名の親要素を取得
  const selector = selectors.channelHeaderChannelName();
  if (!selector) return;
  const el = document.querySelector<HTMLDivElement>(selector);
  if (!el) return;
  // 親チャンネル名のテキストを取得
  // ハッシュマークは削除
  const [, ...channelNames] = [...el.querySelectorAll(':scope a')].map(
    (v) => v.innerHTML
  );
  // 現在のチャンネル名を取得
  const currentChannelName = el.lastElementChild?.innerHTML;
  if (!currentChannelName) return;
  // チャンネル名を返す
  channelNames.push(currentChannelName);
  return channelNames;
};

export default getCurrentChannelNames;
