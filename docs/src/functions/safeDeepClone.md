[**@-xun/js**](../../README.md)

***

[@-xun/js](../../README.md) / [src](../README.md) / safeDeepClone

# Function: safeDeepClone()

> **safeDeepClone**\<`T`\>(`value`, `options?`): `T`

Defined in: [src/index.ts:44](https://github.com/Xunnamius/js-utils/blob/30e31427e1d2cec1853534f05afb32e5094b1a76/src/index.ts#L44)

A smarter more useful cloning algorithm loosely based on the [structured
clone
algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone)
that creates a **deep copy** or "clone" of _any `value`_ (including, for
instance, functions), passing through as-is anything that cannot be cloned.
If `value` itself cannot be cloned, it will similarly be returned as-is.
Cloning objects containing circular references is also supported.

Like `structuredClone`, this function also accepts an array of so-called
"transferable objects" that, when encountered, will be copied-by-reference
rather than cloned.

Unlike `structuredClone` (or similar solutions), this function is guaranteed
never to throw and never to return a value that cannot stand in for `value`.

Note that all own enumerable properties (such as string keys) _and
non-enumerable symbols_ will be recursively cloned. However, non-symbol
non-enumerable properties will be ignored.

## Type Parameters

### T

`T`

## Parameters

### value

`T`

### options?

[`SafeDeepCloneOptions`](../type-aliases/SafeDeepCloneOptions.md)

## Returns

`T`
