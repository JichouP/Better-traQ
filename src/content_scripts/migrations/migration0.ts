import defaultTasks from '@/content_scripts/default/task';
import storage, { Storage } from '@/store/Storage';
import storageSetting from '@/store/StorageSetting';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const migration0 = async (_data?: Storage): Promise<Storage> => {
  const { isSettingSync } = await storageSetting.get();
  if (isSettingSync === undefined) {
    await storage.clear();
    await storageSetting.update({
      isSettingSync: true,
    });
  }
  const newData: Storage = {
    migrationVersion: 0,
    task: defaultTasks,
  };
  return newData;
};

export default migration0;
