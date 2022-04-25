import isSelectedInputOrTextarea from './isSelectedInputOrTextarea';

const notIsSelectedInputOrTextarea = (): boolean =>
  !isSelectedInputOrTextarea();

export default notIsSelectedInputOrTextarea;
