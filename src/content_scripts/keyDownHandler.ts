import { exec } from '@/content_scripts/utils/exec';
import { getElements } from '@/content_scripts/utils/getElements';
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

export const handler: (ev: KeyboardEvent) => void = async (ev) => {
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
        getElements.messages().forEach((el) => {
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
        getElements.channelFilterStar()[0].click();
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
        getElements.messageInputInsertStampButton()[0].click();
        break;
      case 'b': {
        const messagesScroller = getElements.messagesScroller()[0];
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
        document.body.click();
        showMessageTool(0);
        clickMessageTool(0);
        break;
      case 'o':
        ev.preventDefault();
        document.body.click();
        showMessageTool(1);
        clickMessageTool(0);
        break;
      case 'i':
        ev.preventDefault();
        document.body.click();
        showMessageTool(2);
        clickMessageTool(0);
        break;
      case 'u':
        ev.preventDefault();
        document.body.click();
        showMessageTool(3);
        clickMessageTool(0);
        break;
      case 'y':
        ev.preventDefault();
        document.body.click();
        showMessageTool(4);
        clickMessageTool(0);
        break;
      case 't':
        ev.preventDefault();
        document.body.click();
        showMessageTool(5);
        clickMessageTool(0);
        break;
      case 'l':
        (getElements.openSidebar() ||
          getElements.closeSidebar())[0]?.dispatchEvent(new Event('click'));
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
};
