import { getElements } from '@/content_scripts/utils/getElements';

/**
 * Message Toolを表示する
 * @param n 下からn番目(0, 1, 2, ...)
 */
export const showMessageTool = (n: number): void => {
  const messages = getElements.messages();
  messages.forEach((el) => {
    el.dispatchEvent(new Event('mouseleave'));
  });
  messages[messages.length - 1 - n].dispatchEvent(new Event('mouseenter'));
};

/**
 * Message Toolをクリックする
 * @param stampOrMenu 0: Stamp Picker, 1: Menu
 */
export const clickMessageTool = (stampOrMenu: 0 | 1): void => {
  requestAnimationFrame(() => {
    getElements
      .messageToolsIcon()
      [stampOrMenu].dispatchEvent(new Event('click'));
  });
};
