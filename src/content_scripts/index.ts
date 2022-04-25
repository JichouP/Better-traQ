import migration from './migrations/migration';
import taskHandlerBuilder from './taskHandlerBuilder';

migration();

const init = async () => {
  const taskHandler = await taskHandlerBuilder();
  document.addEventListener('keydown', taskHandler);
};

init();
