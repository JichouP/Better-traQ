import { z } from 'zod';

const zCondition = z.union([
  z.literal('iFocusedInputOrTextarea'),
  z.literal('niFocusedInputOrTextarea'),
  z.literal('iFocusedEmptyInputOrTextarea'),
  z.literal('niFocusedEmptyInputOrTextarea'),
  z.literal('iFocusedNCChannelFilterInput'),
  z.literal('niFocusedNCChannelFilterInput'),
  z.literal('iFocusedNUUserFilterInput'),
  z.literal('niFocusedNUUserFilterInput'),
  z.literal('iOpenS'),
  z.literal('niOpenS'),
  z.literal('eHomeChannel'),
  z.literal('notExistHomeChannel'),
  z.literal('eUnreadChannel'),
  z.literal('notExistUnreadChannel'),
]);

export type ConditionEnum = z.infer<typeof zCondition>;

export default zCondition;
