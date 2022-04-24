type Dispatch = (element: HTMLElement) => void;

/**
 * clickイベントを発火する
 */
export const click: Dispatch = (element) => {
  const event = new Event("click");
  element.dispatchEvent(event);
};

/**
 * mousedownイベントを発火させる
 */
export const mousedown: Dispatch = (element) => {
  const event = new Event("mousedown");
  element.dispatchEvent(event);
};

/**
 * mouseenterイベントを発火させる
 */
export const mouseenter: Dispatch = (element) => {
  const event = new Event("mouseenter");
  element.dispatchEvent(event);
};

/**
 * mouseleaveイベントを発火させる
 */
export const mouseleave: Dispatch = (element) => {
  const event = new Event("mouseleave");
  element.dispatchEvent(event);
};

/**
 * blurイベントを発火させる
 */
export const blur: Dispatch = (element) => {
  const event = new Event("blur");
  element.dispatchEvent(event);
};
