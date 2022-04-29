import { z } from 'zod';

const zCondition = z.union([
  z.literal('isSelectedInputOrTextarea'),
  z.literal('notIsSelectedInputOrTextarea'),
  z.literal('isSelectedInputOrTextareaEmpty'),
  z.literal('notIsSelectedInputOrTextareaEmpty'),
  z.literal('isOpenSidebar'),
  z.literal('notIsOpenSidebar'),
  z.literal('homeChannelExists'),
  z.literal('notHomeChannelExists'),
  z.literal('unreadChannelExists'),
  z.literal('notUnreadChannelExists'),
]);

export type ConditionEnum = z.infer<typeof zCondition>;

export default zCondition;
