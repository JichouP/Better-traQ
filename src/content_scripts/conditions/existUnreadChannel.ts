const existUnreadChannel = (): boolean =>
  document.querySelector(
    '#app > div > div > div > div > div > div > div > div > div:nth-child(2) > div > h3'
  )?.innerHTML === '未読';

export default existUnreadChannel;
