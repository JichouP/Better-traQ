import migration from './migrations/migration';
// import migration0 from './migrations/migration0';
import taskHandlerBuilder from './taskHandlerBuilder';

migration();

const init = async () => {
  // migration0();
  const taskHandler = await taskHandlerBuilder();
  document.addEventListener('keydown', taskHandler);
};

init();
