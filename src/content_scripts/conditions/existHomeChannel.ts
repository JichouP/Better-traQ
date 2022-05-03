const existHomeChannel: () => boolean = () =>
  document.querySelector(
    '#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div > h3'
  )?.innerHTML === 'ホームチャンネル';

export default existHomeChannel;
