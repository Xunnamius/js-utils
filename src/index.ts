import clone from 'lodash.clone';
import cloneDeepWith from 'lodash.clonedeepwith';

export * from 'toss-expression';

/**
 * @see {@link safeDeepClone}
 */
export type SafeDeepCloneOptions = {
  /**
   * An array of values that, if encountered, will be copied-by-reference rather
   * than cloned. This is useful when `value` contains references to objects
   * that should not be cloned but instead transferred as-is.
   *
   * Unlike `structuredClone`:
   *
   * - Any value can be transferred (strict comparison is used)
   * - Using `transfer` will never result in the modification of `value` nor the
   *   removal of any of its properties
   */
  transfer?: unknown[];
};

/**
 * A smarter more useful cloning algorithm loosely based on the [structured
 * clone
 * algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone)
 * that creates a **deep copy** or "clone" of _any `value`_ (including, for
 * instance, functions), passing through as-is anything that cannot be cloned.
 * If `value` itself cannot be cloned, it will similarly be returned as-is.
 * Cloning objects containing circular references is also supported.
 *
 * Like `structuredClone`, this function also accepts an array of so-called
 * "transferable objects" that, when encountered, will be copied-by-reference
 * rather than cloned.
 *
 * Unlike `structuredClone` (or similar solutions), this function is guaranteed
 * never to throw and never to return a value that cannot stand in for `value`.
 *
 * Note that all own enumerable properties (such as string keys) _and
 * non-enumerable symbols_ will be recursively cloned. However, non-symbol
 * non-enumerable properties will be ignored.
 */
export function safeDeepClone<T>(value: T, options?: SafeDeepCloneOptions): T {
  const { transfer = [] } = options || {};

  const referenceTracker = new Set();
  const referencesToTransfer = new Set(transfer);

  const attempt = clone(value);

  if (isEmptyObject(attempt) && !isEmptyObject(value)) {
    // ? If we reached this point, it was `value` could not be cloned
    return value;
  }

  // ? cloneDeep already passes through what cannot be cloned so long as it was
  // ? a property of an object that was passed in, so we only need to account
  // ? for the clone-ability of `value` itself (which we do above) and handle
  // ? circular/transferable references (which we do below)

  return cloneDeepWith(value, (value_: unknown) => {
    if (referencesToTransfer.has(value_)) {
      // ? User doesn't want this value cloned, just return it
      return value_;
    }

    if (referenceTracker.has(value_)) {
      // ? We've seen this value before, probably a circular ref, just return it
      return value_;
    }

    referenceTracker.add(value_);

    // ? Let lodash handle it from here
    return undefined;
  });
}

/**
 * This function returns a **shallow copy** or "clone" of _any `value`_
 * (including, for instance, functions). If `value` cannot be cloned, it will be
 * returned as-is.
 *
 * This function is guaranteed never to throw and never to return a value that
 * cannot stand in for `value`.
 *
 * The difference between this function and using an object spread or
 * `Object.assign()` is that all own enumerable properties (such as string keys)
 * _and non-enumerable symbols_ will included in the clone. However, non-symbol
 * non-enumerable properties will be ignored.
 */
export function safeShallowClone<T>(value: T): T {
  const attempt = clone(value);

  if (isEmptyObject(attempt) && !isEmptyObject(value)) {
    return value;
  }

  return attempt;
}

function isEmptyObject(o: unknown) {
  if (!o || typeof o !== 'object') {
    return false;
  }

  // ? Essentially `instanceof Object` that doesn't crawl the prototype chain
  if (Object.getPrototypeOf(o) !== Object.prototype) {
    return false;
  }

  return (
    Object.getOwnPropertyNames(o).length === 0 &&
    Object.getOwnPropertySymbols(o).length === 0
  );
}
