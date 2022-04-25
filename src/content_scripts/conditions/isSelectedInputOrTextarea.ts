const isSelectedInputOrTextarea = (): boolean => {
  const tagName = document.activeElement?.tagName;
  return tagName === 'INPUT' || tagName === 'TEXTAREA';
};

export default isSelectedInputOrTextarea;
