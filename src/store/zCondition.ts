import { z } from 'zod';

const zCondition = z.union([
  z.literal('iFInputOrTextarea'),
  z.literal('niFInputOrTextarea'),
  z.literal('iFEmptyInputOrTextarea'),
  z.literal('niFEmptyInputOrTextarea'),
  z.literal('iFNCChFilterInput'),
  z.literal('niFNCChFilterInput'),
  z.literal('iFNUUserFilterInput'),
  z.literal('niFNUUserFilterInput'),
  z.literal('iOS'),
  z.literal('niOS'),
  z.literal('eHomeCh'),
  z.literal('neHomeCh'),
  z.literal('eUnreadCh'),
  z.literal('neUnreadCh'),
]);

export type ConditionEnum = z.infer<typeof zCondition>;

export default zCondition;
