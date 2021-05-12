import {
  getElements,
  getAllElementByClassName,
} from '@/content_scripts/getElements';
import { exec } from '@/content_scripts/utils/exec';
import {
  clickMessageTool,
  showMessageTool,
} from '@/content_scripts/utils/messageTool';
import { channels, getData } from '@/utils/storage';

const changeChannel = (path: string) => {
  return exec(`changeChannel("${path}")`);
};
const isNotSelectedInput = () => {
  const tagName = document.activeElement?.tagName;
  return tagName !== 'INPUT' && tagName !== 'TEXTAREA';
};

let keyState: Map<any, boolean> = new Map();
let timer: NodeJS.Timeout;
const nowState = {
  place: 2,
  focused: null,
};
window.addEventListener('keyup', async (ev) => {
  const { key } = ev;
  keyState.set(key, false);
  if (ev.altKey || ev.shiftKey || ev.ctrlKey || ev.metaKey) return;
  clearInterval(timer);
});

export const handler: (ev: KeyboardEvent) => void = async (ev) => {
  const { key } = ev;
  keyState.set(key, true);
  if (ev.altKey || ev.ctrlKey || ev.metaKey) return; // Shift + Tab使います
  if (isNotSelectedInput()) {
    switch (key) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0': {
        const url = await getData(channels);
        const targetChannel = url[`channel-${key}` as const];
        if (targetChannel) {
          changeChannel(targetChannel);
        } else {
          // eslint-disable-next-line no-alert
          alert('チャンネルを設定してください');
        }
        break;
      }
      case 'Escape': {
        document.querySelector('body')?.click();
        getElements.messages().forEach((el) => {
          el.dispatchEvent(new Event('mouseleave'));
        });
        break;
      }
      case 'q':
        doFunctions.clickHomeNavigation();
        break;
      case 'w':
        getElements.channels()[0].click();
        break;
      case 'e':
        getElements.channels()[1].click();
        break;
      case 'a':
        getElements.navigations()[1].click();
        break;
      case 's':
        ev.preventDefault();
        getElements.filterInputs()[0].focus();
        break;
      case 'd':
        getElements.channelFilterStar().click();
        break;
      case 'z':
        getElements.navigations()[2].click();
        break;
      case 'x':
        getElements.activityToggleButtons()[0].click();
        break;
      case 'c':
        getElements.activityToggleButtons()[1].click();
        break;
      case 'n':
        ev.preventDefault();
        getElements.messageInput().focus();
        break;
      case 'm':
        ev.preventDefault();
        getElements.messageInputInsertStampButton().click();
        break;
      case 'b': {
        const messagesScroller = getElements.messagesScroller();
        if (!messagesScroller) break;
        messagesScroller.scrollTop = messagesScroller.scrollHeight;
        break;
      }
      case 'h':
        ev.preventDefault();
        getElements.filterInputs()[2].focus();
        break;
      case 'p':
        ev.preventDefault();
        showMessageTool(0);
        clickMessageTool(0);
        break;
      case 'o':
        ev.preventDefault();
        showMessageTool(1);
        clickMessageTool(0);
        break;
      case 'i':
        ev.preventDefault();
        showMessageTool(2);
        clickMessageTool(0);
        break;
      case 'u':
        ev.preventDefault();
        showMessageTool(3);
        clickMessageTool(0);
        break;
      case 'y':
        ev.preventDefault();
        showMessageTool(4);
        clickMessageTool(0);
        break;
      case 't':
        ev.preventDefault();
        showMessageTool(5);
        clickMessageTool(0);
        break;
      case 'l':
        (
          getElements.openSidebar() || getElements.closeSidebar()
        )?.dispatchEvent(new Event('click'));
        break;
      case ';':
        getElements.sidebarContent()[0].click();
        break;
      case 'f':
        // doFunctions.changeMainStatePrev();
        break;
      case 'g':
        // doFunctions.changeMainStateNext();
        break;
      case 'Tab': {
        ev.preventDefault();
        if (ev.shiftKey) doFunctions.moveupChannel(true);
        else doFunctions.movedownChannel(true);
        break;
      }
      case 'v': {
        doFunctions.openSubchannel();
        break;
      }
      case 'j': {
        if (nowState.place == 0) {
          doFunctions.clickNextNavigation();
          break;
        } else if (nowState.place == 1) {
          const navigation_place = getElements.getNavigationIndex();
          const desktop = getElements.desktopNavigation();
          if (!desktop) break;

          // ホームとチャンネル
          if (navigation_place == 0 || navigation_place == 1) {
            // doFunctions.movedownChannel();
            break;
          } else if (navigation_place == 2) {
            const messagePanels = getAllElementByClassName(
              'MessagePanel_container'
            );
            break;
          } else {
          }

          // メッセージ
        } else if (nowState.place == 2) {
          const viewContainer = getElements.messagesScroller();
          if (!viewContainer) break;

          // 連続スクロール
          timer = setInterval(() => {
            viewContainer.scrollTo({
              top: viewContainer.scrollTop - 78 + 30,
              behavior: 'smooth',
            });
          }, 100);

          // メッセージ毎スクロール
          // const messages = getElements.messages();
          // for (let i = 0; i < messages.length; i++) {
          //   if (messages[i].getBoundingClientRect().top > 11.625) {
          //     if (!messages[i + 1]) break;
          //     viewContainer.scrollTo({
          //       top:
          //         viewContainer.scrollTop +
          //         messages[i + 1].getBoundingClientRect().top -
          //         78,
          //       behavior: 'smooth',
          //     });
          //     break;
          //   }
          // }
        }
        break;
      }
      case 'k': {
        if (nowState.place == 0) {
          const navigation_place = getElements.getNavigationIndex();
          getElements.navigations()[(navigation_place - 1 + 5) % 5].click();
          break;
        } else if (nowState.place == 1) {
          const navigation_place = getElements.getNavigationIndex();
          const desktop = getElements.desktopNavigation();
          if (!desktop) break;
          if (navigation_place == 0 || navigation_place == 1) {
            // doFunctions.moveupChannel();
            break;
          } else if (navigation_place == 2) {
            const messagePanels = getAllElementByClassName(
              'MessagePanel_container'
            );
          } else {
          }
          break;
        } else if (nowState.place == 2) {
          doFunctions.scrollupMessageByMessage();
        }
        break;
      }
      case 'Enter':
        const search = getAllElementByClassName<HTMLInputElement>(
          'FilterInput_input'
        )[0];
        if (document.activeElement == search) search.blur();
        break;
    }
  } else {
    switch (key) {
      case 'Escape':
        (
          (document.activeElement as HTMLInputElement) || HTMLTextAreaElement
        )?.blur();
        break;
      case 'ArrowUp': {
        const messageInput = getElements.messageInput();
        if (
          messageInput?.value === '' &&
          messageInput === document.activeElement
        ) {
          ev.preventDefault();
          showMessageTool(0);
          clickMessageTool(1);
          window.setTimeout(() => {
            if (getElements.messageToolsMenu()[2].innerText !== '編集') {
              window.setTimeout(() => {
                document.querySelector('body')?.click();
              }, 0);
              return;
            }
            getElements.messageToolsMenu()[2].click();
            document.querySelector('body')?.click();
            window.setTimeout(() => {
              getElements.messageEditor()?.focus();
            }, 0);
          }, 0);
        }
        break;
      }
    }
  }
};

export const doFunctions = {
  clickNavigationByIndex: (index: number) => {
    if (0 <= index && index < 5) getElements.navigations()[index].click();
    else return undefined;
  },
  clickNextNavigation: () =>
    getElements
      .navigations()
      [(getElements.getNavigationIndex() + 1) % 5].click(),
  clickPrevNavigation: () =>
    getElements
      .navigations()
      [(getElements.getNavigationIndex() - 1 + 5) % 5].click(),

  clickHomeNavigation: () => getElements.navigations()[0].click(),

  clickChannelNavigation: () => getElements.navigations()[1].click(),
  clickChannelMenuByIndex: (index: number) =>
    getElements.channels()[index].click(),
  focusChannelMenuSearch: () => getElements.filterInputs()[0].focus(),
  clickChannelMenuFilterStar: () => getElements.channelFilterStar().click(),
  movedownChannel: (isLoop: boolean) => {
    const channels: NodeListOf<HTMLDivElement> = getAllElementByClassName(
      'ChannelElement_container'
    );
    const channels_clicker: NodeListOf<HTMLDivElement> = getAllElementByClassName(
      'ChannelElementName_container'
    );

    const index = [...channels].findIndex(
      (v) => v.getAttribute('aria-selected') == 'true'
    );
    const target = channels_clicker[index + 1];
    if (isLoop) {
      if (!target) return channels_clicker[0].click();
      return target.click();
    }
    target?.click();
  },
  moveupChannel: (isLoop: boolean) => {
    const channels: NodeListOf<HTMLDivElement> = getAllElementByClassName(
      'ChannelElement_container'
    );
    const channels_clicker: NodeListOf<HTMLDivElement> = getAllElementByClassName(
      'ChannelElementName_container'
    );

    const index = [...channels].findIndex(
      (v) => v.getAttribute('aria-selected') == 'true'
    );
    const target = channels_clicker[index - 1];
    if (isLoop) {
      if (!target) return channels_clicker[0].click();
      return target.click();
    }
    target?.click();
  },
  openSubchannel: () => {
    const channels: NodeListOf<HTMLDivElement> = getAllElementByClassName(
      'ChannelElement_container'
    );
    const channels_clicker: NodeListOf<HTMLDivElement> = getAllElementByClassName(
      'ChannelElementHash_container'
    );

    const index = [...channels].findIndex(
      (v) => v.getAttribute('aria-selected') == 'true'
    );
    channels_clicker[index].click();
  },

  clickActivityNavigation: () => getElements.navigations()[2].click(),
  clickActivityFilterNotification: () =>
    getElements.activityToggleButtons()[0].click(),
  clickActivityFilterChannel: () =>
    getElements.activityToggleButtons()[1].click(),

  clickUserNavigation: () => getElements.navigations()[3].click(),

  clickClipNavigation: () => getElements.navigations()[4].click(),

  focusMessageInput: () => getElements.messageInput().focus(),
  clickMessageInputInsertStampButton: () =>
    getElements.messageInputInsertStampButton().click(),
  leaveinput: () => {
    document.querySelector('body')?.click();
    getElements.messages().forEach((el) => {
      el.dispatchEvent(new Event('mouseleave'));
    });
  },
  leaveNo: () => {
    (
      (document.activeElement as HTMLInputElement) || HTMLTextAreaElement
    )?.blur();
  },

  initState: (place: number) => {
    nowState.place = place;
  },
  changeMainStateNext: () => {
    if (nowState.place > 0) nowState.place = nowState.place - 1;
  },
  changeMainStatePrev: () => {
    if (nowState.place < 3) nowState.place = nowState.place + 1;
  },

  scrollLatestMessage: (option: number) => {
    const messagesScroller = getElements.messagesScroller();
    if (!messagesScroller) return;
    messagesScroller.scrollTop = messagesScroller.scrollHeight;
  },
  scrollupMessage: () => {
    const viewContainer = getElements.messagesScroller();
    if (!viewContainer) return;

    timer = setInterval(() => {
      viewContainer.scrollTo({
        top: viewContainer.scrollTop - 78 - 30,
        behavior: 'smooth',
      });
    }, 100);
  },
  scrolldownMessage: () => {
    const viewContainer = getElements.messagesScroller();
    if (!viewContainer) return;

    timer = setInterval(() => {
      viewContainer.scrollTo({
        top: viewContainer.scrollTop - 78 + 30,
        behavior: 'smooth',
      });
    }, 100);
  },
  scrollupMessageByMessage: () => {
    const viewContainer = getElements.messagesScroller();
    if (!viewContainer) return;

    const messages = getElements.messages();
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].getBoundingClientRect().top < 0) {
        if (i != 0 && i != 1)
          messages[i].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        else
          viewContainer.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        break;
      }
    }
  },
  scrolldownMessageByMessage: () => {
    const viewContainer = getElements.messagesScroller();
    if (!viewContainer) return;

    // メッセージ毎スクロール
    const messages = getElements.messages();
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].getBoundingClientRect().top > 11.625) {
        if (!messages[i + 1]) break;
        viewContainer.scrollTo({
          top:
            viewContainer.scrollTop +
            messages[i + 1].getBoundingClientRect().top -
            78,
          behavior: 'smooth',
        });
        break;
      }
    }
  },
  openStampsByMessage: (index: number) => {
    showMessageTool(index);
    clickMessageTool(0);
  },

  arrowup: () => {
    const messageInput = getElements.messageInput();
    if (messageInput?.value === '' && messageInput === document.activeElement) {
      showMessageTool(0);
      clickMessageTool(1);
      window.setTimeout(() => {
        if (getElements.messageToolsMenu()[2].innerText !== '編集') {
          window.setTimeout(() => {
            document.querySelector('body')?.click();
          }, 0);
          return;
        }
        getElements.messageToolsMenu()[2].click();
        document.querySelector('body')?.click();
        window.setTimeout(() => {
          getElements.messageEditor()?.focus();
        }, 0);
      }, 0);
    }
  },
  l: () => {
    (getElements.openSidebar() || getElements.closeSidebar())?.dispatchEvent(
      new Event('click')
    );
  },
  openSidebarVisitor: () => getElements.sidebarContent()[0].click(),
};
