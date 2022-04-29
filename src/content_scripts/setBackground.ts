import selectors from './selectors';
import { get } from '@/store/Storage';

const setBackground = async (): Promise<void> => {
  const { background } = await get();
  if (!background) return;
  const { backgroundUrl } = background;
  if (!backgroundUrl) return;
  const backgroundFilter =
    background.backgroundFilter || 'rgba(255, 255, 255, 0.8)';
  const backgroundSelector = selectors.channelViewBackground();
  if (!backgroundSelector) return;
  const backgroundFilterSelector = selectors.channelViewFilterContainer();
  if (!backgroundFilterSelector) return;

  const css = `
${backgroundSelector} {
  background: url(${backgroundUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
${backgroundFilterSelector} {
  background: ${backgroundFilter || 'rgba(255, 255, 255, 0.8)'};
}
  `;
  const styleEl = document.createElement('style');
  styleEl.id = 'custom-background';
  styleEl.textContent = css;
  document.head.appendChild(styleEl);
};

export default setBackground;
