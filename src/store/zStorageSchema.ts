import z from 'zod';
import zTask from './zTask';

export const zStorageSchema = z
  .object({
    migrationVersion: z.number(),
    task: zTask,
    background: z.object({
      backgroundUrl: z.string().optional(),
      backgroundFilter: z.string().optional(),
    }),
  })
  .partial();

export default zStorageSchema;
