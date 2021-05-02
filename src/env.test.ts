import { HOST, SERVICE } from '@/env';

it('should be string', () => {
  expect(typeof HOST).toBe('string');
  expect(typeof SERVICE).toBe('string');
});
