import { z } from 'zod';

export const zLocalConfigStorage = {
  isSettingSync: z.boolean().optional(),
};

export const zCustomStorage = {
  'channel-0': z.string().optional(), // チャンネル0
  'channel-1': z.string().optional(), // チャンネル1
  'channel-2': z.string().optional(), // チャンネル2
  'channel-3': z.string().optional(), // チャンネル3
  'channel-4': z.string().optional(), // チャンネル4
  'channel-5': z.string().optional(), // チャンネル5
  'channel-6': z.string().optional(), // チャンネル6
  'channel-7': z.string().optional(), // チャンネル7
  'channel-8': z.string().optional(), // チャンネル8
  'channel-9': z.string().optional(), // チャンネル9
  'background-0': z.string().optional(), // Background URL
  'background-1': z.string().optional(), // Background URL
  'background-2': z.string().optional(), // Background URL
  'background-3': z.string().optional(), // Background URL
  'background-4': z.string().optional(), // Background URL
  'background-5': z.string().optional(), // Background URL
  'background-6': z.string().optional(), // Background URL
  'background-7': z.string().optional(), // Background URL
  'background-8': z.string().optional(), // Background URL
  'background-9': z.string().optional(), // Background URL
  'filterColor-0': z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  'filterColor-1': z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  'filterColor-2': z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  'filterColor-3': z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  'filterColor-4': z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  'filterColor-5': z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  'filterColor-6': z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  'filterColor-7': z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  'filterColor-8': z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  'filterColor-9': z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
};
