import selectors from '../selectors';

const cNUTopSearchResult = () => {
  const channelListSelector = selectors.navigationBarUsersUserList();
  if (!channelListSelector) return;
  const channelList = document.querySelector(channelListSelector);
  if (!channelList) return;
  const targetEl = channelList.querySelector<HTMLDivElement>(':scope > a');

  targetEl?.click();
};

export default cNUTopSearchResult;
