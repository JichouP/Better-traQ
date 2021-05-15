import * as Actions from '@/content_scripts/actions/action';
import { exec } from '@/content_scripts/utils/exec';
import { getElements } from '@/content_scripts/utils/getElements';
import { clickMessageTool } from '@/content_scripts/utils/messageTool';
import { channels, getData } from '@/utils/storage';

const changeChannel = (path: string) => {
  return exec(`changeChannel("${path}")`);
};
const isNotSelectedInput = () => {
  const tagName = document.activeElement?.tagName;
  return tagName !== 'INPUT' && tagName !== 'TEXTAREA';
};

const keyState: Map<string, boolean> = new Map();
let timer: NodeJS.Timeout;
// const nowState = {
//   place: 2,
//   focused: null,
// };
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
        const channelUrls = await getData(channels);
        const targetChannel = channelUrls[`channel-${key}` as const];
        if (targetChannel) {
          changeChannel(targetChannel);
        } else {
          // eslint-disable-next-line no-alert
          alert('チャンネルを設定してください');
        }
        return;
      }
      case 'Escape': {
        document.body.click();
        getElements.messages().forEach((el) => {
          el?.dispatchEvent(new Event('mouseleave'));
        });
        return;
      }
      case 'q':
        return Actions.clickNthNavigation(0);
      case 'w':
        return Actions.clickNthChannelElement(0);
      case 'e':
        return Actions.clickNthChannelElement(1);
      case 'a':
        return Actions.clickNthNavigation(1);
      case 's':
        return Actions.focusNthFilterInput(ev, 0);
      case 'd':
        return Actions.clickChannelFilterStar();
      case 'z':
        return Actions.clickNthNavigation(2);
      case 'x':
        return Actions.clickNthActivityToggleButton(0);
      case 'c':
        return Actions.clickNthActivityToggleButton(1);
      case 'n':
        return Actions.focusMessageInput(ev);
      case 'm':
        return Actions.clickMessageInputInsertStampButton(ev);
      case 'b':
        return Actions.moveToBottomOfPage();
      case 'h':
        return Actions.focusNthFilterInput(ev, 2);
      case 'p':
        return clickMessageTool(ev, 0);
      case 'o':
        return Actions.openNthStampPicker(ev, 1);
      case 'i':
        return Actions.openNthStampPicker(ev, 2);
      case 'u':
        return Actions.openNthStampPicker(ev, 3);
      case 'y':
        return Actions.openNthStampPicker(ev, 4);
      case 't':
        return Actions.openNthStampPicker(ev, 5);
      case 'l':
        return Actions.toggleSidebar();
      case ';':
        return Actions.clickNthSidebarContent(0);
      case 'f':
        return Actions.showPrevMessageTool();
      case 'g':
        return Actions.showNextMessageTool();
      case 'Tab':
        return Actions.clickOneChannelUpOrDown(ev, true);
      case 'v':
        return Actions.clickHashOfSelectedChannel();
      case 'j':
        return Actions.focusOnOneMessageBelow();
      case 'k':
        return Actions.focusOnOneMessageAbove();
      case 'Enter': {
        if (document.activeElement === getElements.filterInputs()[0])
          return Actions.blurActiveInputElement();
      }
    }
  } else {
    switch (key) {
      case 'Escape':
        return Actions.blurActiveInputElement();
      case 'ArrowUp': {
        return Actions.openNthMessageEditor(ev, 0, 'up');
      }
    }
  }
};
