import { getElements } from '@/content_scripts/utils/getElements';
import * as messageTool from '@/content_scripts/utils/messageTool';

const lazy = (fn: () => unknown) => {
  requestAnimationFrame(fn);
};

const getNavigationIndex = (): number =>
  [...getElements.navigations()]
    .map((v) => v.getAttribute('aria-selected'))
    .findIndex((e) => e === 'true');

const getIndexOfSelectedMessage = (): number | void => {
  const messageToolElement = getElements.messageToolsContainer()[0];
  if (!messageToolElement) return;
  const els =
    messageToolElement.parentElement?.parentElement?.parentElement?.children;
  const el = messageToolElement.parentElement?.parentElement;
  if (!els || !el) return;
  return [...els].length - 1 - [...els].indexOf(el);
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

export const clickNthChannelElement = (i: number): void => {
  getElements.channelNameContainers()[i]?.click();
};

export const clickOneChannelUp = (isLoop: boolean): void => {
  const channels = getElements.channelContainers();
  const channelNameContainers = getElements.channelNameContainers();

  const targetIndex = [...channels].findIndex(
    (v) => v.getAttribute('aria-selected') === 'true'
  );
  const target = channelNameContainers[targetIndex - 1];
  if (isLoop) {
    if (!target) return channelNameContainers[0].click();
    return target.click();
  }
  target?.click();
};

export const clickOneChannelDown = (isLoop: boolean): void => {
  const channels = getElements.channelContainers();
  const channelNameContainers = getElements.channelNameContainers();

  const targetIndex = [...channels].findIndex(
    (v) => v.getAttribute('aria-selected') === 'true'
  );
  const target = channelNameContainers[targetIndex + 1];
  if (isLoop) {
    if (!target) return channelNameContainers[0].click();
    return target.click();
  }
  target?.click();
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
  const channels = getElements.channelContainers();
  const channelHashContainers: NodeListOf<HTMLDivElement> =
    getElements.channelHashContainers();

  const targetIndex = [...channels].findIndex(
    (v) => v.getAttribute('aria-selected') === 'true'
  );
  channelHashContainers[targetIndex].click();
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

export const focusMessageInput = (event: KeyboardEvent): void => {
  event.preventDefault();
  getElements.messageInput()?.focus();
};

export const focusMessageEditor = (event: KeyboardEvent): void => {
  event.preventDefault();
  getElements.messageEditor()?.focus();
};

export const openNthMessageEditor = (event: KeyboardEvent, i: number): void => {
  const messageInput = getElements.messageInput();
  if (messageInput?.value === '' && messageInput === document.activeElement) {
    event.preventDefault();
    messageTool.showMessageTool(i);
    lazy(() => {
      messageTool.clickMessageTool(1);
    });
    lazy(() => {
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
  const scroller = getElements.messagesScroller()[0];
  if (!scroller) return;

  const messages = getElements.messages();
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    if (messages[i].getBoundingClientRect().top < 0) {
      if (i !== 0 && i !== 1)
        messages[i].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      else
        scroller.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      break;
    }
  }
};

export const focusOnOneMessageBelow = (): void => {
  const scroller = getElements.messagesScroller()[0];
  if (!scroller) return;

  const messages = getElements.messages();
  for (let i = 0; i < messages.length; i += 1) {
    if (messages[i].getBoundingClientRect().top > 11.625) {
      if (!messages[i + 1]) return;
      scroller.scrollTo({
        top:
          scroller.scrollTop + messages[i + 1].getBoundingClientRect().top - 78,
        behavior: 'smooth',
      });
      return;
    }
  }
};

export const clickNthStamp = (i: number): void => {
  getElements.stamps()[i].click();
};

export const mouseleaveAllMessages = (): void => {
  getElements.messages().forEach((el) => {
    el.dispatchEvent(new Event('mouseleave'));
  });
};

export const openNthStampPicker = (event: KeyboardEvent, i: number): void => {
  event.preventDefault();
  document.body.click();
  messageTool.showMessageTool(i);
  lazy(() => {
    messageTool.clickMessageTool(0);
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
  if (i === undefined) return;
  messageTool.showMessageTool(i + 1);
};

export const showNextMessageTool = (): void => {
  const i = getIndexOfSelectedMessage();
  if (i === undefined || i <= 0) return;
  messageTool.showMessageTool(i - 1);
};

export const clickNthMessageToolsIcon = (i: number): void => {
  getElements.messageToolsIcon()[i]?.dispatchEvent(new Event('click'));
};

export const clickNthMessageToolsMenu = (i: number): void => {
  getElements.messageToolsMenu()[i]?.dispatchEvent(new Event('click'));
};

export const moveToBottomOfPage = (): void => {
  const messagesScroller = getElements.messagesScroller()[0];
  if (messagesScroller) {
    messagesScroller.scrollTop = messagesScroller.scrollHeight;
  }
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
