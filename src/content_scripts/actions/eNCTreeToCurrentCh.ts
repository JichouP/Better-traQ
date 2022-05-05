/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import selectors from '../selectors';
import { clickHash } from './utils/dispatchEvent';
import getCurrentChNames from './utils/getCurrentChannelNames';
import lazy from '@/utils/lazy';

const getChNameList = (el: HTMLElement) => {
  const channelNameList = [
    ...el.querySelectorAll<HTMLSpanElement>(':scope > div > div > div > span'),
  ].map((channelNameSpan) => channelNameSpan.innerHTML);
  return channelNameList;
};

const eNCTreeToCurrentCh = async () => {
  const channelNames = getCurrentChNames();
  if (!channelNames) return;
  const channelListSelector = selectors.navigationBarChannelsChList();
  if (!channelListSelector) return;
  const channelListContainer =
    document.querySelector<HTMLDivElement>(channelListSelector);
  if (!channelListContainer) return;

  // コンテナの子・クリック可能な要素を取得
  let currentTarget = channelListContainer;
  for (const [i, channelName] of channelNames.entries()) {
    const index = getChNameList(currentTarget).findIndex(
      (v) => v === channelName
    );
    const hash = currentTarget.querySelector<HTMLDivElement>(
      `:scope > div:nth-child(${
        index + 1
      }) > div:nth-child(1) > div:nth-child(1)`
    );
    if (!hash) return;
    const hashChild = hash.firstElementChild;
    if (!hashChild) return;

    // hashをクリックする
    // 最後はクリックしない
    if (
      !hashChild.hasAttribute('data-is-opened') &&
      channelNames.length - 1 !== i
    )
      clickHash(hash);

    await lazy(() => {
      const newTarget = currentTarget.querySelector<HTMLDivElement>(
        `:scope > div:nth-child(${
          index + 1
        }) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)`
      );
      if (!newTarget) return;
      currentTarget = newTarget;
    });
  }
};

export default eNCTreeToCurrentCh;
