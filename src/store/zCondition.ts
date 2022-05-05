import { z } from 'zod';

const zCondition = z.union([
  z.literal('isFocusedInputOrTextarea'),
  z.literal('notIsFocusedInputOrTextarea'),
  z.literal('isFocusedEmptyInputOrTextarea'),
  z.literal('notIsFocusedEmptyInputOrTextarea'),
  z.literal('isFocusedNCChannelFilterInput'),
  z.literal('notIsFocusedNCChannelFilterInput'),
  z.literal('isFocusedNUUserFilterInput'),
  z.literal('notIsFocusedNUUserFilterInput'),
  z.literal('isOpenSidebar'),
  z.literal('notIsOpenSidebar'),
  z.literal('existHomeChannel'),
  z.literal('notExistHomeChannel'),
  z.literal('existUnreadChannel'),
  z.literal('notExistUnreadChannel'),
]);

export type ConditionEnum = z.infer<typeof zCondition>;

export default zCondition;
