import selectors from '../selectors';

const clickChannelHeaderChannelNameParentChannelName = () => {
  // Header のチャンネル名の親要素を取得
  const selector = selectors.channelHeaderChannelName();
  if (!selector) return;
  const el = document.querySelector<HTMLDivElement>(selector);
  if (!el) return;
  // 親チャンネル名のテキストを取得
  // ハッシュマークは削除
  const [, ...channelNames] = [
    ...el.querySelectorAll<HTMLAnchorElement>(':scope a'),
  ];
  const target = channelNames.at(-1);
  if (!target) return;
  target.click();
};

export default clickChannelHeaderChannelNameParentChannelName;
