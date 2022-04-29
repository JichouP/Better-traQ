const isFocusedEmptyInputOrTextarea = (): boolean => {
  const activeElement = document.activeElement as
    | HTMLInputElement
    | HTMLTextAreaElement;
  if (!activeElement) return false;
  const { tagName } = activeElement;
  if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
    return activeElement.value === '';
  }
  return false;
};

export default isFocusedEmptyInputOrTextarea;
