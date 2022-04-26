import selectors from '@/content_scripts/selectors';

const getChannelList = (): HTMLDivElement[] | undefined => {
  const channelListSelector = selectors.navigationBarChannelsChannelList();
  if (!channelListSelector) return;
  const channelList =
    document.querySelector<HTMLDivElement>(channelListSelector);
  if (!channelList) return;

  // クラス名を取得するために一番上のチャンネルコンテナを取得
  const topChannelContainer = document.querySelector(
    `${channelListSelector} > div:nth-child(1)`
  );
  if (!topChannelContainer) return;
  const className = topChannelContainer.className.split(' ')[0];

  // クラス名からチャンネルのリストを取得する
  const channels = [
    ...channelList.querySelectorAll<HTMLDivElement>(`.${className}`),
  ];
  return channels;
};

export default getChannelList;
