import { z } from 'zod';

const zCondition = z.union([
  z.literal('isFocusedInputOrTextarea'),
  z.literal('niFocusedInputOrTextarea'),
  z.literal('isFocusedEmptyInputOrTextarea'),
  z.literal('niFocusedEmptyInputOrTextarea'),
  z.literal('isFocusedNCChannelFilterInput'),
  z.literal('niFocusedNCChannelFilterInput'),
  z.literal('isFocusedNUUserFilterInput'),
  z.literal('niFocusedNUUserFilterInput'),
  z.literal('isOpenS'),
  z.literal('niOpenS'),
  z.literal('existHomeChannel'),
  z.literal('notExistHomeChannel'),
  z.literal('existUnreadChannel'),
  z.literal('notExistUnreadChannel'),
]);

export type ConditionEnum = z.infer<typeof zCondition>;

export default zCondition;
