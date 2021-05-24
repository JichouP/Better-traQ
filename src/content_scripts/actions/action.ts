import reloadStore from '@/content_scripts/store/ReloadStore';
import { getElements } from '@/content_scripts/utils/getElements';
import * as messageTool from '@/content_scripts/utils/messageTool';

const lazy = (fn: () => unknown) => {
  requestAnimationFrame(fn);
};

// library
const getNavigationIndex = (): number =>
  [...getElements.navigations()].findIndex(
    (v) => v.getAttribute('aria-selected') === 'true'
  );

const getChannelIndex = (): number =>
  [...getElements.channelContainers()].findIndex(
    (v) => v.getAttribute('aria-selected') === 'true'
  );

const getSelectedChannelName = (): string[] => {
  const channelList = getElements.headerChannelName();
  const channelAncestor = channelList.querySelectorAll(
    '[class^="HeaderChannelName_ancestor_"]'
  );
  const channelCurrent = channelList.querySelectorAll(
    '[class^="HeaderChannelName_current_"]'
  )[0];
  const channelNames = [...channelAncestor].map((e) => e.textContent ?? '');
  channelNames.push(channelCurrent.textContent ?? '');
  return channelNames;
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

// click Navigation Button
export const clickNthNavigation = (i: number): void => {
  getElements.navigations()[i]?.click();
};

export const clickNextNavigation = (): void =>
  clickNthNavigation((getNavigationIndex() + 1) % 5);

export const clickPrevNavigation = (): void =>
  clickNthNavigation((getNavigationIndex() - 1 + 5) % 5);

export const clickNthDesktopToolBox = (i: number): void => {
  getElements.desktopToolBox()[i]?.click();
};

// click channels
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

export const clickOneChannelUp = (
  event: KeyboardEvent,
  isLoop: boolean
): void => {
  event.preventDefault();
  const target = clickNthChannelElement(getChannelIndex() - 1);
  if (isLoop && !target) {
    clickNthChannelElement(0);
  }
};

export const clickOneChannelDown = (
  event: KeyboardEvent,
  isLoop: boolean
): void => {
  event.preventDefault();
  const target = clickNthChannelElement(getChannelIndex() + 1);
  if (isLoop && !target) {
    clickNthChannelElement(0);
  }
};

export const clickNthChannelHash = (index: number): void => {
  const channelHashContainers: NodeListOf<HTMLDivElement> =
    getElements.channelHashContainers();
  channelHashContainers[index]?.click();
};

export const clickHashOfSelectedChannel = (): void =>
  clickNthChannelHash(getChannelIndex());

export const clickOpenSelectedChannel = (): void => {
  clickNthNavigation(1);
  const channelNames = getSelectedChannelName();

  lazy(() => {
    for (let i = 0; i < channelNames.length; i += 1) {
      lazy(() => {
        const index = [...getElements.channelNameContainers()].findIndex(
          (v) => v.querySelector('span')?.textContent === channelNames[i]
        );
        if (
          getElements
            .channelHashContainersHash()
            [index]?.hasAttribute('data-is-opened') === false
        ) {
          clickNthChannelHash(index);
        }
        lazy(() => {
          clickNthChannelElement(index);
        });
      });
    }
  });
};

export const clickChannelHierarchyUp = (): void => {
  const channelHierarchy = getElements
    .headerChannelName()
    .querySelectorAll<HTMLDivElement>('[class^="HeaderChannelName_ancestor_"]');
  channelHierarchy[channelHierarchy.length - 1]?.click();
};

export const focusNthFilterInput = (event: KeyboardEvent, i: number): void => {
  event.preventDefault();
  getElements.filterInputs()[i]?.focus();
};

export const focusSearchFilterInputSelectedChannel = (
  startFromSelectedChannel: boolean
): void => {
  clickNthNavigation(1);
  lazy(() => {
    const filterInput = getElements.filterInputs()[0];
    if (startFromSelectedChannel) {
      const channelList = getSelectedChannelName();

      let searchText = '';
      for (let i = 0; i < channelList.length; i += 1) {
        searchText += channelList[i];
        searchText += '/';
      }
      filterInput.value = searchText;
    }
    filterInput?.focus();
  });
};

export const clickChannelFilterStar = (): void => {
  getElements.channelFilterStar()[0]?.click();
};

export const clickChannelForward = (): void => {
  getElements.popupNavigatorButtons()[0]?.click();
};

export const clickChannelBack = (): void => {
  getElements.popupNavigatorButtons()[1]?.click();
};

export const clickNthActivityToggleButton = (i: number): void => {
  getElements.activityToggleButtons()[i]?.click();
};

export const clickLatestMessage = (): void => {
  const current = reloadStore.get();
  if (current.reloader !== 0) {
    window.clearInterval(current.reloader);
    reloadStore.set({ reloader: 0 });
    return;
  }
  clickNthNavigation(2);
  const reloader = window.setInterval((): void => {
    if (getNavigationIndex() !== 2) {
      window.clearInterval(current.reloader);
      reloadStore.set({ reloader: 0 });
      return;
    }
    const latestMessage = getElements.activityContainer()[0];
    if (latestMessage !== current.latestMessage) {
      reloadStore.set({ latestMessage });
      latestMessage?.click();
    }
  }, 1000);
  reloadStore.set({ reloader });
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
    lazy(() => {
      messageTool.clickMessageTool(event, 1);
    });
    lazy(() => {
      const edit = getElements.messageToolsMenu()[2];
      const { body } = document;
      if (!edit) return;
      if (edit.innerText !== '編集') {
        return lazy(() => {
          const messages = getElements.messages();
          messages[messages.length - 1].dispatchEvent(new Event('mouseleave'));
          body?.click();
        });
      }
      edit?.click();
      lazy(() => {
        focusMessageEditor(event);
      });
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
  getElements.stamps()[i]?.click();
};

export const mouseleaveAllMessages = (): void => {
  getElements.messages().forEach((el) => {
    el?.dispatchEvent(new Event('mouseleave'));
  });
};

export const openNthStampPicker = (event: KeyboardEvent, i: number): void => {
  event.preventDefault();
  document.body?.click();
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

export const clickSpoilersOfSelectedMessage = (): void => {
  const messageToolContainer = getElements.messageToolsContainer()[0];
  if (
    !messageToolContainer ||
    !(messageToolContainer.parentElement instanceof HTMLDivElement)
  )
    return;
  getElements
    .spoilersInElement(messageToolContainer.parentElement)
    .forEach((v) => v?.click());
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
  lazy(() => {
    clickNthSidebarContent(0);
  });
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
