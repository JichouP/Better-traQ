import { browser } from 'webextension-polyfill-ts';
import { z } from 'zod';
import { zCustomStorage, zLocalConfigStorage } from '@/utils/zod';

const StorageSchema = z.object(zCustomStorage);

export type CustomStorage = z.infer<typeof StorageSchema>;

export const getSyncConfig = async (): Promise<boolean> => {
  const localValidationResult = await z
    .object(zLocalConfigStorage)
    .safeParseAsync(
      await browser.storage.local.get(Object.keys(zLocalConfigStorage))
    );

  if (!localValidationResult.success) {
    throw new Error('invalid data');
  }

  return localValidationResult.data.isSettingSync ?? true;
};

export const initSyncConfig = async (): Promise<void> => {
  await browser.storage.local.set({ isSettingSync: true });
};

export const getAllData = async (): Promise<CustomStorage> => {
  const isSync = await getSyncConfig();
  const get = isSync ? browser.storage.sync.get : browser.storage.local.get;
  const validationResult = await z
    .object(zCustomStorage)
    .safeParseAsync(await get(null));
  if (!validationResult.success) {
    throw new Error('invalid data');
  }
  return validationResult.data;
};

export const getData = async (
  keys: keyof typeof zCustomStorage | (keyof typeof zCustomStorage)[]
): Promise<Partial<CustomStorage>> => {
  const isSync = await getSyncConfig();
  const get = isSync ? browser.storage.sync.get : browser.storage.local.get;
  const validationResult = await z
    .object(zCustomStorage)
    .safeParseAsync(await get(keys));
  if (!validationResult.success) {
    throw new Error('invalid data');
  }
  return validationResult.data;
};

export const setData = async (data: CustomStorage): Promise<void> => {
  const isSync = await getSyncConfig();
  const set = isSync ? browser.storage.sync.set : browser.storage.local.set;
  await set(data);
};

export type Channel =
  | 'channel-0'
  | 'channel-1'
  | 'channel-2'
  | 'channel-3'
  | 'channel-4'
  | 'channel-5'
  | 'channel-6'
  | 'channel-7'
  | 'channel-8'
  | 'channel-9';

export const channels: Channel[] = [
  'channel-0',
  'channel-1',
  'channel-2',
  'channel-3',
  'channel-4',
  'channel-5',
  'channel-6',
  'channel-7',
  'channel-8',
  'channel-9',
];

export type Background =
  | 'background-0'
  | 'background-1'
  | 'background-2'
  | 'background-3'
  | 'background-4'
  | 'background-5'
  | 'background-6'
  | 'background-7'
  | 'background-8'
  | 'background-9';

export const backgrounds: Background[] = [
  'background-0',
  'background-1',
  'background-2',
  'background-3',
  'background-4',
  'background-5',
  'background-6',
  'background-7',
  'background-8',
  'background-9',
];

export type FilterColor =
  | 'filterColor-0'
  | 'filterColor-1'
  | 'filterColor-2'
  | 'filterColor-3'
  | 'filterColor-4'
  | 'filterColor-5'
  | 'filterColor-6'
  | 'filterColor-7'
  | 'filterColor-8'
  | 'filterColor-9';

export const filterColors: FilterColor[] = [
  'filterColor-0',
  'filterColor-1',
  'filterColor-2',
  'filterColor-3',
  'filterColor-4',
  'filterColor-5',
  'filterColor-6',
  'filterColor-7',
  'filterColor-8',
  'filterColor-9',
];
