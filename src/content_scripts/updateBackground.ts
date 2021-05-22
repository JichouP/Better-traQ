import { getData } from '@/utils/storage';

export const updateBackground = async (): Promise<void> => {
  const backgroundLinkElement = document.createElement('style');
  const backgroundUrl: string =
    (await getData('background0')).background0 || '';
  const filterColor: string =
    (await getData('filterColor0')).filterColor0 || '';
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
};
