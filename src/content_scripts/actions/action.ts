import { getElements } from '@/content_scripts/utils/getElements';
import {
  clickMessageTool,
  showMessageTool,
} from '@/content_scripts/utils/messageTool';

const lazy = (fn: () => unknown) => {
  requestAnimationFrame(fn);
};

export const clickNthNavigation = (i: number): void => {
  getElements.navigations()[i]?.click();
};

export const clickNthDesktopToolBox = (i: number): void => {
  getElements.desktopToolBox()[i]?.click();
};

export const clickNthChannelElement = (i: number): void => {
  getElements.channels()[i]?.click();
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
    showMessageTool(i);
    lazy(() => {
      clickMessageTool(1);
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
  showMessageTool(i);
  lazy(() => {
    clickMessageTool(0);
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
