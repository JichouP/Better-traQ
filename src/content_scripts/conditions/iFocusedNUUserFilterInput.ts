import selectors from '../selectors';

const iFocusedNUUserFilterInput = (): boolean => {
  const { activeElement } = document;
  if (!activeElement) return false;
  const channelFilterSelector = selectors.navigationBarUsersUserFilterInput();
  if (!channelFilterSelector) return false;
  const channelFilter = document.querySelector<HTMLInputElement>(
    channelFilterSelector
  );
  if (!channelFilter) return false;
  return channelFilter === activeElement;
};

export default iFocusedNUUserFilterInput;
