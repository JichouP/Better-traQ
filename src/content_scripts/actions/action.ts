import { getElements } from '@/content_scripts/utils/getElements';
import * as messageTool from '@/content_scripts/utils/messageTool';

type ReloadState = {
  latestMessage: HTMLDivElement | null;
  reloader: number;
};
const reloadState: ReloadState = {
  latestMessage: null,
  reloader: 0,
};

const lazy = (fn: () => unknown) => {
  requestAnimationFrame(fn);
};

const getNavigationIndex = (): number =>
  [...getElements.navigations()]
    .map((v) => v.getAttribute('aria-selected'))
    .findIndex((e) => e === 'true');

const getChannelIndex = (): number => {
  const channels = getElements.channelContainers();
  return getNavigationIndex() === 0
    ? [...channels].findIndex((v) => v.getAttribute('aria-selected') === 'true')
    : channels.length -
        1 -
        [...channels]
          .reverse()
          .findIndex((v) => v.getAttribute('aria-selected') === 'true');
};

const getIndexOfSelectedMessage = (): number | undefined => {
  const messageToolElement = getElements.messageToolsContainer()[0];
  if (!messageToolElement) return;
  const els =
    messageToolElement.parentElement?.parentElement?.parentElement?.children;
  const el = messageToolElement.parentElement?.parentElement;
  if (!els || !el) return;
  return [...els].indexOf(el);
};

export const clickNthNavigation = (i: number): void => {
  getElements.navigations()[i]?.click();
};

export const clickNextNavigation = (): void =>
  getElements.navigations()[(getNavigationIndex() + 1) % 5].click();

export const clickPrevNavigation = (): void =>
  getElements.navigations()[(getNavigationIndex() - 1 + 5) % 5].click();

export const clickNthDesktopToolBox = (i: number): void => {
  getElements.desktopToolBox()[i]?.click();
};

export const clickNthChannelElement = (i: number): HTMLDivElement => {
  const channelNameContainers = getElements.channelNameContainers()[i];
  channelNameContainers?.scrollIntoView({
    block: 'nearest',
  });
  channelNameContainers?.click();
  return channelNameContainers;
};

export const clickNameChannelElement = (name: string): number => {
  const channelNameContainers = getElements.channelNameContainers();
  const targetIndex = [...channelNameContainers]
    .map((v) => v.querySelector('span')?.textContent)
    .findIndex((e) => e === name);
  channelNameContainers[targetIndex]?.scrollIntoView({
    block: 'nearest',
  });
  channelNameContainers[targetIndex]?.click();
  return targetIndex;
};

export const clickOneChannelUp = (isLoop: boolean): void => {
  const target = clickNthChannelElement(getChannelIndex() - 1);
  if (isLoop && !target) {
    clickNthChannelElement(0);
  }
};

export const clickOneChannelDown = (isLoop: boolean): void => {
  const target = clickNthChannelElement(getChannelIndex() + 1);
  if (isLoop && !target) {
    clickNthChannelElement(0);
  }
};

export const clickOneChannelUpOrDown = (
  event: KeyboardEvent,
  isLoop: boolean
): void => {
  event.preventDefault();
  if (event.shiftKey) clickOneChannelUp(isLoop);
  else clickOneChannelDown(isLoop);
};

export const clickHashOfSelectedChannel = (): void => {
  const channelHashContainers: NodeListOf<HTMLDivElement> =
    getElements.channelHashContainers();

  channelHashContainers[getChannelIndex()]?.click();
};

export const clickNthChannelHash = (index: number): void => {
  const channelHashContainers: NodeListOf<HTMLDivElement> =
    getElements.channelHashContainers();

  channelHashContainers[index]?.click();
};

export const clickChannelNavigation = (): void => {
  clickNthNavigation(1);
  lazy(() => {
    const channelList = getElements.headerChannelName();
    const channelHierarchy = channelList.querySelectorAll('a');
    const channelCurrent = channelList.querySelectorAll(
      '[class^="HeaderChannelName_current_"]'
    )[0];

    let channelNameContainers = getElements.channelNameContainers();
    for (let i = 1; i < channelHierarchy.length; i += 1) {
      const index = [...channelNameContainers].findIndex(
        (v) =>
          v.querySelector('span')?.textContent ===
          channelHierarchy[i].textContent
      );
      // eslint-disable-next-line no-console
      console.log(channelHierarchy[i].textContent);
      // clickNthChannelElement(index);
      clickNthChannelHash(index);
      // eslint-disable-next-line no-loop-func
      lazy(() => {
        channelNameContainers = getElements.channelNameContainers();
      });
      // channelNameContainers = channelNameContainers[index].querySelectorAll(
      //   '[class*="ChannelElementName_container"]'
      // );
    }
    [...channelNameContainers]
      .find(
        (v) =>
          v.querySelector('span')?.textContent === channelCurrent?.textContent
      )
      ?.click();
  });
};

export const focusSearchFilterInput = (
  startFromSelectedChannel: boolean
): void => {
  clickNthNavigation(1);
  lazy(() => {
    const filterInput = getElements.filterInputs()[0];
    if (startFromSelectedChannel) {
      const channelList = getElements.headerChannelName();
      const channelHierarchy = channelList.querySelectorAll('a');
      const channelCurrent = channelList.querySelectorAll(
        '[class^="HeaderChannelName_current_"]'
      );

      let searchText = '';
      // skip #
      for (let i = 1; i < channelHierarchy.length; i += 1) {
        searchText += channelHierarchy[i].textContent;
        searchText += '/';
      }
      searchText += channelCurrent[0]?.textContent;
      searchText += '/';
      filterInput.value = searchText;
    }
    filterInput?.focus();
  });
};

export const clickChannelHierarchyUp = (): void => {
  const channelHierarchy = getElements
    .headerChannelName()
    .querySelectorAll('a');
  channelHierarchy[channelHierarchy.length - 1].click();
};

export const focusNthFilterInput = (event: KeyboardEvent, i: number): void => {
  event.preventDefault();
  getElements.filterInputs()[i]?.focus();
};

export const clickChannelFilterStar = (): void => {
  getElements.channelFilterStar()[0]?.click();
};

export const clickNthActivityToggleButton = (i: number): void => {
  getElements.activityToggleButtons()[i]?.click();
};

export const clickLatestMessage = (): void => {
  if (reloadState.reloader !== 0) {
    window.clearInterval(reloadState.reloader);
    reloadState.reloader = 0;
    return;
  }
  clickNthNavigation(2);
  reloadState.reloader = window.setInterval((): void => {
    if (getNavigationIndex() !== 2) {
      window.clearInterval(reloadState.reloader);
      reloadState.reloader = 0;
      return;
    }
    const latestMessage = getElements.activityContainer()[0];
    if (latestMessage !== reloadState.latestMessage) {
      reloadState.latestMessage = latestMessage;
      latestMessage.click();
    }
  }, 1000);
};

export const focusMessageInput = (event: KeyboardEvent): void => {
  event.preventDefault();
  getElements.messageInput()?.focus();
};

export const focusMessageEditor = (event: KeyboardEvent): void => {
  event.preventDefault();
  getElements.messageEditor()?.focus();
};

export const openNthMessageEditor = (
  event: KeyboardEvent,
  i: number,
  direction: BetterTraQ.Direction
): void => {
  const messageInput = getElements.messageInput();
  if (messageInput?.value === '' && messageInput === document.activeElement) {
    messageTool.showMessageTool(i, direction);
    messageTool.clickMessageTool(event, 1);
    const edit = getElements.messageToolsMenu()[2];
    const { body } = document;
    if (!edit) return;
    if (edit.innerText !== '編集') {
      return lazy(() => {
        body.click();
      });
    }
    edit.click();
    body.click();
    lazy(() => {
      focusMessageEditor(event);
    });
  }
};

export const clickMessageInputInsertStampButton = (
  event: KeyboardEvent
): void => {
  event.preventDefault();
  getElements.messageInputInsertStampButton()[0]?.click();
};

export const focusOnOneMessageAbove = (): void => {
  const messages = getElements.messages();
  const index = getIndexOfSelectedMessage() ?? messages.length;

  // load old messages
  if (index === 0)
    return getElements.messagesScroller()[0]?.scrollTo({ top: 0 });

  const targetIndex = Math.min(Math.max(index - 1, 0), messages.length - 1);
  messageTool.showMessageTool(targetIndex, 'down');
  messages[targetIndex]?.scrollIntoView({
    block: 'start',
  });
};

export const focusOnOneMessageBelow = (): void => {
  const messages = getElements.messages();
  const index = getIndexOfSelectedMessage() ?? messages.length - 1;
  const targetIndex = Math.min(Math.max(index + 1, 0), messages.length - 1);
  messageTool.showMessageTool(targetIndex, 'down');
  messages[targetIndex]?.scrollIntoView({
    block: 'start',
  });
};

export const clickNthStamp = (i: number): void => {
  getElements.stamps()[i].click();
};

export const mouseleaveAllMessages = (): void => {
  getElements.messages().forEach((el) => {
    el?.dispatchEvent(new Event('mouseleave'));
  });
};

export const openNthStampPicker = (event: KeyboardEvent, i: number): void => {
  event.preventDefault();
  document.body.click();
  messageTool.showMessageTool(i, 'up');
  lazy(() => {
    messageTool.clickMessageTool(event, 0);
  });
};

export const clickOpenSidebar = (): void => {
  getElements.openSidebar()[0]?.dispatchEvent(new Event('click'));
};

export const clickCloseSidebar = (): void => {
  getElements.closeSidebar()[0]?.dispatchEvent(new Event('click'));
};

export const clickNthSidebarContent = (i: number): void => {
  getElements.sidebarContent()[i]?.click();
};

export const showPrevMessageTool = (): void => {
  const i = getIndexOfSelectedMessage();
  if (i === undefined) return messageTool.showMessageTool(0, 'up');
  messageTool.showMessageTool(i - 1, 'down');
};

export const showNextMessageTool = (): void => {
  const i = getIndexOfSelectedMessage();
  if (i === undefined || i <= 0) return messageTool.showMessageTool(0, 'up');
  messageTool.showMessageTool(i + 1, 'down');
};

export const clickNthMessageToolsIcon = (i: number): void => {
  getElements.messageToolsIcon()[i]?.dispatchEvent(new Event('click'));
};

export const clickNthMessageToolsMenu = (i: number): void => {
  getElements.messageToolsMenu()[i]?.dispatchEvent(new Event('click'));
};

export const moveToBottomOfPage = (): void => {
  const scroller = getElements.messagesScroller()[0];
  if (!scroller) return;
  scroller.scrollTo({
    behavior: 'smooth',
    top: scroller.scrollHeight,
  });
};

export const toggleSidebar = (): void => {
  (
    getElements.openSidebar()[0] || getElements.closeSidebar()[0]
  )?.dispatchEvent(new Event('click'));
};

export const blurActiveInputElement = (): void => {
  const { activeElement } = document;
  if (
    activeElement instanceof HTMLInputElement ||
    activeElement instanceof HTMLTextAreaElement
  ) {
    activeElement.blur();
  }
};
