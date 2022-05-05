import defaultTasks from '@/content_scripts/default/task';
import storage, { Storage } from '@/store/Storage';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const migration1 = async (_data?: Storage): Promise<Storage> => {
  await storage.clear();
  const newData: Storage = {
    migrationVersion: 1,
    task: defaultTasks,
  };
  return newData;
};

export default migration1;
