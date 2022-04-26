import Browser from 'webextension-polyfill';
import z from 'zod';
import storageSetting from './StorageSetting';
import zStorageSchema from './zStorageSchema';

export type Storage = z.infer<typeof zStorageSchema>;

const getStorage = async (): Promise<Browser.Storage.StorageArea> => {
  const { isSettingSync } = await storageSetting.get();
  if (isSettingSync) {
    return Browser.storage.sync;
  }
  return Browser.storage.local;
};

export const get = async (): Promise<Storage> => {
  const storage = await getStorage();
  const data = await storage.get(Object.keys(zStorageSchema.shape));
  return zStorageSchema.parse(data);
};

export const unsafeGet = async (): Promise<Storage> => {
  const storage = await getStorage();
  const data = await storage.get(Object.keys(zStorageSchema.shape));
  return data as Storage;
};

export const update = async (newData: Storage) => {
  const storage = await getStorage();
  await storage.set(zStorageSchema.parse(newData));
};

export const clear = async () => {
  const storage = await getStorage();
  await storage.clear();
};

const storage = {
  get,
  unsafeGet,
  update,
  clear,
};

export default storage;
