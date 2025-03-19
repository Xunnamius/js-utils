import clone from 'lodash.clone';
import cloneDeep from 'lodash.clonedeep';

/**
 * A smarter more useful cloning algorithm based on the "structured clone"
 * algorithm that accepts any `value` and clones it, passing through as-is
 * whatever cannot be cloned (including `value` itself, if it cannot be cloned).
 *
 * Unlike `structuredClone` or similar solutions, this function is guaranteed
 * never to throw nor return a value that cannot stand in for `value`.
 *
 * Note that all own enumerable properties (such as string keys) _and
 * non-enumerable symbols_ will be recursively cloned.
 */
// TODO: consider replacing lodash imports with structuredClone itself
export function safeDeepClone<T>(value: T): T {
  const attempt = clone(value);

  if (isEmptyObject(attempt) && !isEmptyObject(value)) {
    return value;
  }

  // ? cloneDeep already passes through what cannot be cloned so long as it was
  // ? a property of an object that was passed in, so we only need to account
  // ? for the clone-ability of `value` itself (which we do above)
  return cloneDeep(value);
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
