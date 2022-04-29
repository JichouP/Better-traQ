import migration from './migrations/migration';
import setBackground from './setBackground';
import taskHandlerBuilder from './taskHandlerBuilder';
// import storage from '@/store/Storage';

const init = async () => {
  // await storage.clear();
  await migration();
  const taskHandler = await taskHandlerBuilder();
  document.addEventListener('keydown', taskHandler);
  await setBackground();
};

init();
