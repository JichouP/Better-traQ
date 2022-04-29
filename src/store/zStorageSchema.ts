import z from 'zod';
import zTask from './zTask';
import schemaForType from '@/utils/schemaForType';

type StorageSchema = {
  migrationVersion: number;
  task: Task[];
};

export const zStorageSchema = schemaForType<StorageSchema>()(
  z.object({
    migrationVersion: z.number().default(-1),
    task: zTask,
  })
);

export default zStorageSchema;
