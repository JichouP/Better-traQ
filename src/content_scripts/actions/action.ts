import { getElements } from '@/content_scripts/utils/getElements';
import {
  clickMessageTool,
  showMessageTool,
} from '@/content_scripts/utils/messageTool';

/**
 * n番目の Navigation Selector をクリックする
 * @param n n番目
 */
export const clickNthNavigation = (n: number): void => {
  getElements.navigations()[n]?.click();
};

/**
 * n番目の Desktop Tool Box をクリックする
 * @param n n番目
 */
export const clickNthDesktopToolBox = (n: number): void => {
  getElements.desktopToolBox()[n]?.click();
};

/**
 * n番目の Channel Element をクリックする
 * @param n n番目
 */
export const clickNthChannelElement = (n: number): void => {
  getElements.channels()[n]?.click();
};

export const openNthStampPicker = (n: number): void => {
  document.body.click();
  showMessageTool(n);
  clickMessageTool(0);
};
