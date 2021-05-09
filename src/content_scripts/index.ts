import { getElements } from '@/content_scripts/getElements';
import { exec } from '@/content_scripts/utils/exec';
import {
  clickMessageTool,
  showMessageTool,
} from '@/content_scripts/utils/messageTool';
import { channels, getData } from '@/utils/storage';

const changeChannel = (path: string) => {
  return exec(`changeChannel("${path}")`);
};

const backgroundLinkElement = document.createElement('style');
(async () => {
  const backgroundUrl: string =
    (await getData('background-0'))['background-0'] || '';
  const filterColor: string =
    (await getData('filterColor-0'))['filterColor-0'] || '';
  backgroundLinkElement.textContent = `
[class*=MainView_primary] {
    background: url(${backgroundUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
[class*=ChannelViewContent_container] {
    background: ${filterColor || 'rgba(255, 255, 255, 0.8)'};
}
[class*=ClipsView_container] {
    background: ${filterColor || 'rgba(255, 255, 255, 0.8)'};
}
[class*=MessageElement_body]:not([data-is-editing]):not([data-is-pinned]):not([data-is-entry]):hover {
    background: rgba(0, 0, 0, 0);
}
[class*=ClipElement_body]:not([data-is-editing]):not([data-is-pinned]):not([data-is-entry]):hover {
    background: rgba(0, 0, 0, 0);
}
`;
  document.head.appendChild(backgroundLinkElement);
  const classPrefix = {
    navigations: 'NavigationSelectorItem_container',
    channels: 'ChannelElementName_container',
    filterInputs: 'FilterInput_input',
    channelStar: 'ChannelFilter_star',
    toggleButtons: 'ToggleButton_container',
    messageInput: 'MessageInputTextArea_container',
    messageEditor: 'MessageEditor_inputTextArea',
    messageInputInsertStampButton: 'MessageInputInsertStampButton_container',
    // stampList: 'StampPickerStampList_container',
    stamps: 'StampPickerStampList_stampListItem',
    messages: 'MessageElement_body',
    openSidebar: 'ChannelSidebarHidden_icon',
    closeSidebar: 'CloseButton_circle',
    sidebarContent: 'SidebarContentContainer_container',
    messageToolsIcon: 'MessageTools_icon',
    messageToolsMenu: 'MessageToolsMenu_text',
  };

  const isNotSelectedInput = () => {
    const tagName = document.activeElement?.tagName;
    return tagName !== 'INPUT' && tagName !== 'TEXTAREA';
  };

  window.addEventListener('keydown', async (ev) => {
    const { key } = ev;
    if (ev.altKey || ev.shiftKey || ev.ctrlKey || ev.metaKey) return;
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
          const messages = document.querySelectorAll(
            `[class*=${classPrefix.messages}]`
          );
          messages.forEach((el) => {
            el.dispatchEvent(new Event('mouseleave'));
          });
          break;
        }
        case 'q':
          getElements.navigations()[0].click();
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
  });
})();
