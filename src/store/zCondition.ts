import { z } from 'zod';

const zCondition = z.union([
  z.literal('iFInputOrTextarea'),
  z.literal('niFInputOrTextarea'),
  z.literal('iFEmptyInputOrTextarea'),
  z.literal('niFEmptyInputOrTextarea'),
  z.literal('iFNCChannelFilterInput'),
  z.literal('niFNCChannelFilterInput'),
  z.literal('iFNUUserFilterInput'),
  z.literal('niFNUUserFilterInput'),
  z.literal('iOpenS'),
  z.literal('niOpenS'),
  z.literal('eHomeChannel'),
  z.literal('neHomeChannel'),
  z.literal('eUnreadChannel'),
  z.literal('neUnreadChannel'),
]);

export type ConditionEnum = z.infer<typeof zCondition>;

export default zCondition;
