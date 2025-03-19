// * These tests ensure the exported interfaces under test function as expected.

import { safeDeepClone } from 'universe';

const $symbol = Symbol('symbol');

describe('::safeDeepClone', () => {
  it('deep clones all enumerable own properties and non-enumerable symbols including objects containing non-cloneable values', async () => {
    expect.hasAssertions();

    const target = {
      [$symbol]: { [$symbol]: { a: { b: 'c' } } },
      d: 1,
      e: function () {
        return 'f';
      },
      g: { h: true }
    };

    expect(safeDeepClone(target)).toStrictEqual(target);
    expect(safeDeepClone(target)).not.toBe(target);

    expect(safeDeepClone(target).e).toBe(target.e);
    expect(safeDeepClone(target).g).not.toBe(target.g);

    expect(safeDeepClone(target)[$symbol]).not.toBe(target[$symbol]);
    expect(safeDeepClone(target)[$symbol][$symbol].a.b).toBe(
      target[$symbol][$symbol].a.b
    );
  });

  it('clones non-cloneable top-level values directly', async () => {
    expect.hasAssertions();

    const bigInt = 55n;
    const fn = function () {
      return 'fn';
    };

    expect(safeDeepClone(bigInt)).toBe(bigInt);
    expect(safeDeepClone(fn)).toBe(fn);
  });

  it('clones empty object', async () => {
    expect.hasAssertions();

    const empty = {};

    expect(safeDeepClone(empty)).toStrictEqual(empty);
    expect(safeDeepClone(empty)).not.toBe(empty);
  });

  it('clones object-like target', async () => {
    expect.hasAssertions();

    const target = new Map([
      ['a', 1],
      ['b', 5]
    ]);

    expect(safeDeepClone(target)).toStrictEqual(target);
    expect(safeDeepClone(target)).not.toBe(target);
  });

  it('clones object containing only a symbol', async () => {
    expect.hasAssertions();

    const hasSymbol = { [$symbol]: $symbol };

    expect(safeDeepClone(hasSymbol)).toStrictEqual(hasSymbol);
    expect(safeDeepClone(hasSymbol)[$symbol]).toBe($symbol);
    expect(safeDeepClone(hasSymbol)).not.toBe(hasSymbol);
  });
});
