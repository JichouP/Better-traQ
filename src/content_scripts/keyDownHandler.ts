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
// const nowState = {
//   place: 2,
//   focused: null,
// };
window.addEventListener('keyup', async (ev) => {
  const { key } = ev;
  keyState.set(key, false);
  // if (ev.altKey || ev.shiftKey || ev.ctrlKey || ev.metaKey) return;
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
        const targetChannel = channelUrls[`channel${key}` as const];
        if (targetChannel) {
          changeChannel(targetChannel);
        } else {
          // eslint-disable-next-line no-alert
          alert('チャンネルを設定してください');
        }
        return;
      }
      case 'Escape': {
        document.body?.click();
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
      case 'r':
        return Actions.clickChannelBack();
      case 't':
        return Actions.clickChannelForward();
      case 'a':
        return Actions.clickNthNavigation(1);
      case 'A':
        return Actions.clickOpenSelectedChannel();
      case 's':
        return Actions.focusSearchFilterInputSelectedChannel(false);
      case 'd':
        return Actions.focusSearchFilterInputSelectedChannel(true);
      case 'f':
        return Actions.clickChannelHierarchyUp();
      case 'g':
        return Actions.clickChannelFilterStar();
      case 'z':
        return Actions.clickNthNavigation(2);
      case 'x':
        return Actions.clickNthActivityToggleButton(0);
      case 'c':
        return Actions.clickNthActivityToggleButton(1);
      case '-':
        return Actions.clickLatestMessage();
      case 'n':
        return Actions.focusMessageInput(ev);
      case 'm':
        return Actions.clickMessageInputInsertStampButton(ev);
      case 'h':
        return Actions.focusNthFilterInput(ev, 2);
      case 'j':
        return Actions.focusOnOneMessageBelow();
      case 'k':
        return Actions.focusOnOneMessageAbove();
      case 'b':
        return Actions.moveToBottomOfPage();
      case 'u':
        return Actions.clickOneChannelDown(ev, true);
      case 'i':
        return Actions.clickOneChannelUp(ev, true);
      case 'o':
        return Actions.clickHashOfSelectedChannel();
      case 'p':
        return clickMessageTool(ev, 0);
      case 'l':
        return Actions.toggleSidebar();
      case '@':
        return Actions.clickSpoilersOfSelectedMessage();
    }
  } else {
    switch (key) {
      case 'Escape':
        return Actions.blurActiveInputElement();
      case 'ArrowUp': {
        return Actions.openNthMessageEditor(ev, 0, 'up');
      }
      case 'Enter': {
        if (document.activeElement === getElements.filterInputs()[0]) {
          Actions.blurActiveInputElement();
          return Actions.clickNthChannelElement(0);
        }
      }
    }
  }
};
