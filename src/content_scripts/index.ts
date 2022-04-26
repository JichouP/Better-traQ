import migration from './migrations/migration';
import taskHandlerBuilder from './taskHandlerBuilder';
// import storage from '@/store/Storage';

const init = async () => {
  // await storage.clear();
  await migration();
  const taskHandler = await taskHandlerBuilder();
  document.addEventListener('keydown', taskHandler);
};

init();
