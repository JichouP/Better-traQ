import selectors from '../selectors';
import { click, mouseenter } from './utils/dispatchEvent';
import lazy from '@/utils/lazy';

const clickChannelView6thLatestMessageStampPicker = () => {
  const messageSelector = selectors.channelView6thLatestMessage();
  if (!messageSelector) return;
  const messageEl = document.querySelector<HTMLDivElement>(messageSelector);
  if (!messageEl) return;

  mouseenter(messageEl);
  lazy(() => {
    const stampPickerSelector = selectors.channelViewMessageToolStamp();
    if (!stampPickerSelector) return;
    const stampPickerEl =
      document.querySelector<SVGElement>(stampPickerSelector);
    if (!stampPickerEl) return;

    click(stampPickerEl);
  });
};

export default clickChannelView6thLatestMessageStampPicker;
