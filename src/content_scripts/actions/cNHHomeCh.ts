import selectors from '../selectors';
import { click } from './utils/dispatchEvent';

const cNHHomeCh = () => {
  const homeChSelector = selectors.navigationBarHomeHomeCh();
  if (!homeChSelector) return;
  const homeChEl = document.querySelector<HTMLDivElement>(homeChSelector);
  if (!homeChEl) return;
  click(homeChEl);
};

export default cNHHomeCh;
