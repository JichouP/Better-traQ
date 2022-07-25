import selectors from '../selectors';
import { click } from './utils/dispatchEvent';
import lazy from '@/utils/lazy';

const cVSelectedMsgStampPicker = () => {
  lazy(() => {
    const stampPickerSelector = selectors.channelViewMsgToolStamp();
    if (!stampPickerSelector) return;
    const stampPickerEl =
      document.querySelector<SVGElement>(stampPickerSelector);
    if (!stampPickerEl) return;

    click(stampPickerEl);
  });
};

export default cVSelectedMsgStampPicker;
