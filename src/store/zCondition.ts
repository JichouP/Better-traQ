import { z } from 'zod';

const zCondition = z.union([
  z.literal('isFocusedInputOrTextarea'),
  z.literal('notIsFocusedInputOrTextarea'),
  z.literal('isFocusedEmptyInputOrTextarea'),
  z.literal('notIsFocusedEmptyInputOrTextarea'),
  z.literal('isOpenSidebar'),
  z.literal('notIsOpenSidebar'),
  z.literal('homeChannelExists'),
  z.literal('notHomeChannelExists'),
  z.literal('unreadChannelExists'),
  z.literal('notUnreadChannelExists'),
]);

export type ConditionEnum = z.infer<typeof zCondition>;

export default zCondition;
