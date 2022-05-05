const bActiveInputElement = () => {
  const { activeElement } = document;
  if (
    activeElement instanceof HTMLInputElement ||
    activeElement instanceof HTMLTextAreaElement
  ) {
    activeElement.blur();
  }
};

export default bActiveInputElement;
