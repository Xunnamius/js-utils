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

  it('clones object with circular references', async () => {
    expect.hasAssertions();

    const circular = { a: 1, b: true, self: {}, self2: { self: {} } };
    circular.self = circular;
    circular.self2.self = circular.self2;

    // ? Ensure safeDeepClone isn't changing stuff in the original object
    Object.freeze(circular);

    expect(safeDeepClone(circular)).not.toBe(circular);
    expect(safeDeepClone(circular).a).toBe(1);
    expect(safeDeepClone(circular).b).toBeTrue();
    expect(safeDeepClone(circular).self).toBe(circular);
    expect(safeDeepClone(circular).self2.self).toBe(circular.self2);
  });

  it('clones object with respect to options.transfer', async () => {
    expect.hasAssertions();

    const circular = { a: 1, b: true, self: {}, self2: { self: {} } };
    circular.self = circular;
    circular.self2.self = circular.self2;

    const target = { [$symbol]: { state: { x: 'one', circular } }, y: false };

    // ? Ensure safeDeepClone isn't changing stuff in the original objects
    Object.freeze(circular);
    Object.freeze(target);

    const clone = safeDeepClone(target, { transfer: [circular] });

    expect(clone).not.toBe(target);
    expect(clone.y).toBeFalse();
    expect(clone[$symbol].state.x).toBe('one');
    expect(clone[$symbol].state).not.toBe(target[$symbol].state);
    expect(clone[$symbol].state.circular).toBe(circular);
  });
});
