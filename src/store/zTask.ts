import z from 'zod';
import zAction from './zAction';
import zCondition from './zCondition';

export const zTask = z.array(
  z.object({
    name: z.string(),
    keybinds: z.array(
      z.object({
        key: z.string(),
        shiftKey: z.boolean().optional(),
        ctrlKey: z.boolean().optional(),
        altKey: z.boolean().optional(),
        metaKey: z.boolean().optional(),
        conditions: z.array(zCondition),
      })
    ),
    actions: z.array(zAction),
  })
);

export default zTask;
