/* eslint-disable no-await-in-loop */
import migration0 from './migration0';
import storage, { Storage } from '@/store/Storage';

const migrations: ((data: Storage) => Promise<Storage>)[] = [migration0];

const migration = async () => {
  let data = await storage.get();

  // check if migration is needed
  if (data.migrationVersion === migrations.length - 1) {
    return;
  }

  // execute migration0 if migrationVersion is undefined
  for (
    let i = (data.migrationVersion ?? -1) + 1;
    i < migrations.length;
    i += 1
  ) {
    data = await migrations[i](data);
  }

  await storage.update(data);
};

export default migration;
