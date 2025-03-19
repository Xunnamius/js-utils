[**@-xun/js**](../../README.md)

***

[@-xun/js](../../README.md) / [src](../README.md) / safeDeepClone

# Function: safeDeepClone()

> **safeDeepClone**\<`T`\>(`value`): `T`

Defined in: [src/index.ts:18](https://github.com/Xunnamius/js-utils/blob/fcd7443a36e078d7d51602c86396f6095ee9367e/src/index.ts#L18)

A smarter more useful cloning algorithm based on the "structured clone"
algorithm that accepts any `value` and clones it, passing through as-is
whatever cannot be cloned (including `value` itself, if it cannot be cloned).

Unlike `structuredClone` or similar solutions, this function is guaranteed
never to throw nor return a value that cannot stand in for `value`.

Note that all own enumerable properties (such as string keys) _and
non-enumerable symbols_ will be recursively cloned.

## Type Parameters

### T

`T`

## Parameters

### value

`T`

## Returns

`T`
