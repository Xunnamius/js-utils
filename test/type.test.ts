// * These tests ensure the exported types under test function as expected.

import { describe, expect, it } from 'tstyche';

import { safeDeepClone } from 'universe';

describe('::safeDeepClone', () => {
  it('returns as the output the type of the input', async () => {
    expect(safeDeepClone(1)).type.toBe<1>();
    expect(safeDeepClone(true)).type.toBe<true>();
    expect(safeDeepClone({ a: 1, b: true })).type.toBe<{ a: number; b: boolean }>();
  });
});
