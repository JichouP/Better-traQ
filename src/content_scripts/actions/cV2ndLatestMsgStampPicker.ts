import selectors from '../selectors';
import { click, mouseenter } from './utils/dispatchEvent';
import lazy from '@/utils/lazy';

const cV2ndLatestMsgStampPicker = () => {
  const messageSelector = selectors.channelView2ndLatestMsg();
  if (!messageSelector) return;
  const messageEl = document.querySelector<HTMLDivElement>(messageSelector);
  if (!messageEl) return;
  mouseenter(messageEl);
  lazy(() => {
    const stampPickerSelector = selectors.channelViewMsgToolStamp();
    if (!stampPickerSelector) return;
    const stampPickerEl =
      document.querySelector<SVGElement>(stampPickerSelector);
    if (!stampPickerEl) return;

    click(stampPickerEl);
  });
};

export default cV2ndLatestMsgStampPicker;
