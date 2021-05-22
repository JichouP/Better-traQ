import { z } from 'zod';

export const zLocalConfigStorage = {
  isSettingSync: z.boolean().optional(),
};

export const zCustomStorage = {
  channel0: z.string().optional(), // チャンネル0
  channel1: z.string().optional(), // チャンネル1
  channel2: z.string().optional(), // チャンネル2
  channel3: z.string().optional(), // チャンネル3
  channel4: z.string().optional(), // チャンネル4
  channel5: z.string().optional(), // チャンネル5
  channel6: z.string().optional(), // チャンネル6
  channel7: z.string().optional(), // チャンネル7
  channel8: z.string().optional(), // チャンネル8
  channel9: z.string().optional(), // チャンネル9
  background0: z.string().optional(), // Background URL
  background1: z.string().optional(), // Background URL
  background2: z.string().optional(), // Background URL
  background3: z.string().optional(), // Background URL
  background4: z.string().optional(), // Background URL
  background5: z.string().optional(), // Background URL
  background6: z.string().optional(), // Background URL
  background7: z.string().optional(), // Background URL
  background8: z.string().optional(), // Background URL
  background9: z.string().optional(), // Background URL
  filterColor0: z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  filterColor1: z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  filterColor2: z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  filterColor3: z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  filterColor4: z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  filterColor5: z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  filterColor6: z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  filterColor7: z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  filterColor8: z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
  filterColor9: z.string().optional(), // Filter RGBA string e.g. rgba(36, 43, 51, 0.8), rgba(255, 255, 255, 0.8)
};
