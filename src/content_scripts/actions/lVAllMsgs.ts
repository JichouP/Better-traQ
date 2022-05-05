import selectors from '../selectors';
import { mouseleave } from './utils/dispatchEvent';

const lVAllMsgs = () => {
  document.body.click();

  const messageListSelector = selectors.channelViewMsgList();
  if (!messageListSelector) return;
  const messageListContainerEl =
    document.querySelector<HTMLDivElement>(messageListSelector);
  if (!messageListContainerEl) return;

  const messageList = [...messageListContainerEl.children] as HTMLDivElement[];

  messageList.forEach(mouseleave);
};

export default lVAllMsgs;
