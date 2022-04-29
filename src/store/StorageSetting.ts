import Browser from 'webextension-polyfill';
import z from 'zod';

const StorageSettingSchema = z.object({
  isSettingSync: z.boolean().optional(),
});

export type StorageSetting = z.infer<typeof StorageSettingSchema>;

export const get = async (): Promise<StorageSetting> => {
  const setting = await Browser.storage.local.get(
    Object.keys(StorageSettingSchema.shape)
  );
  return StorageSettingSchema.parse(setting);
};

export const update = async (newSetting: StorageSetting) => {
  await Browser.storage.local.set(StorageSettingSchema.parse(newSetting));
};

export const clear = async () => {
  await Browser.storage.local.clear();
};

const storageSetting = {
  get,
  update,
  clear,
};

export default storageSetting;
