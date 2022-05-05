import selectors from '@/content_scripts/selectors';

const getChList = (): HTMLDivElement[] | undefined => {
  const channelListSelector = selectors.navigationBarChannelsChList();
  if (!channelListSelector) return;
  const channelList =
    document.querySelector<HTMLDivElement>(channelListSelector);
  if (!channelList) return;

  // クラス名を取得するために一番上のチャンネルコンテナを取得
  const topChContainer = document.querySelector(
    `${channelListSelector} > div:nth-child(1)`
  );
  if (!topChContainer) return;
  const className = topChContainer.className.split(' ')[0];

  // クラス名からチャンネルのリストを取得する
  const channels = [
    ...channelList.querySelectorAll<HTMLDivElement>(`.${className}`),
  ];
  return channels;
};

export default getChList;
