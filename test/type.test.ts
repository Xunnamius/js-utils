// * These tests ensure the exported types under test function as expected.

import { describe, expect, it } from 'tstyche';

import { isEmptyRecord, isRecord, safeDeepClone, safeShallowClone } from 'universe';

describe('::safeDeepClone', () => {
  it('returns as the output the type of the input', async () => {
    expect(safeDeepClone(1)).type.toBe<1>();
    expect(safeDeepClone(true)).type.toBe<true>();
    expect(safeDeepClone({ a: 1, b: true })).type.toBe<{ a: number; b: boolean }>();
  });
});

describe('::safeShallowClone', () => {
  it('returns as the output the type of the input', async () => {
    expect(safeShallowClone(1)).type.toBe<1>();
    expect(safeShallowClone(true)).type.toBe<true>();
    expect(safeShallowClone({ a: 1, b: true })).type.toBe<{ a: number; b: boolean }>();
  });
});

describe('::isRecord', () => {
  it('acts as type guard for Record types', async () => {
    const x = 1;

    if (isRecord(x)) {
      expect(x).type.toBeAssignableTo<Record<PropertyKey, unknown>>();
    } else {
      expect(x).type.not.toBe<Record<PropertyKey, unknown>>();
    }
  });
});

describe('::isEmptyRecord', () => {
  it('acts as type guard for Record types', async () => {
    const x = 1;

    if (isEmptyRecord(x)) {
      expect(x).type.toBeAssignableTo<Record<PropertyKey, unknown>>();
    } else {
      expect(x).type.not.toBe<Record<PropertyKey, unknown>>();
    }
  });
});
