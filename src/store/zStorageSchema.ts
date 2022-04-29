import z from 'zod';
import zTask from './zTask';
import schemaForType from '@/utils/schemaForType';

export const zStorageSchema = z
  .object({
    migrationVersion: z.number(),
    task: zTask,
  })
  .partial();

export default zStorageSchema;
