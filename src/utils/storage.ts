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
  | 'channel0'
  | 'channel1'
  | 'channel2'
  | 'channel3'
  | 'channel4'
  | 'channel5'
  | 'channel6'
  | 'channel7'
  | 'channel8'
  | 'channel9';

export const channels: Channel[] = [
  'channel0',
  'channel1',
  'channel2',
  'channel3',
  'channel4',
  'channel5',
  'channel6',
  'channel7',
  'channel8',
  'channel9',
];

export type Background =
  | 'background0'
  | 'background1'
  | 'background2'
  | 'background3'
  | 'background4'
  | 'background5'
  | 'background6'
  | 'background7'
  | 'background8'
  | 'background9';

export const backgrounds: Background[] = [
  'background0',
  'background1',
  'background2',
  'background3',
  'background4',
  'background5',
  'background6',
  'background7',
  'background8',
  'background9',
];

export type FilterColor =
  | 'filterColor0'
  | 'filterColor1'
  | 'filterColor2'
  | 'filterColor3'
  | 'filterColor4'
  | 'filterColor5'
  | 'filterColor6'
  | 'filterColor7'
  | 'filterColor8'
  | 'filterColor9';

export const filterColors: FilterColor[] = [
  'filterColor0',
  'filterColor1',
  'filterColor2',
  'filterColor3',
  'filterColor4',
  'filterColor5',
  'filterColor6',
  'filterColor7',
  'filterColor8',
  'filterColor9',
];
