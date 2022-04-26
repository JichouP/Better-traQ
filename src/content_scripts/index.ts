import migration from './migrations/migration';
import taskHandlerBuilder from './taskHandlerBuilder';
import storage, { unsafeGet } from '@/store/Storage';

const init = async () => {
  // await storage.clear();
  await migration();
  // const a = await unsafeGet();
  // console.log(JSON.stringify(a).length, a);
  const taskHandler = await taskHandlerBuilder();
  document.addEventListener('keydown', taskHandler);
};

init();
