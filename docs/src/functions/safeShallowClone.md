[**@-xun/js**](../../README.md)

***

[@-xun/js](../../README.md) / [src](../README.md) / safeShallowClone

# Function: safeShallowClone()

> **safeShallowClone**\<`T`\>(`value`): `T`

Defined in: [src/index.ts:93](https://github.com/Xunnamius/js-utils/blob/3df40ccd18d5b4088869d50725b32981f4bd1c30/src/index.ts#L93)

This function returns a **shallow copy** or "clone" of _any `value`_
(including, for instance, functions). If `value` cannot be cloned, it will be
returned as-is.

This function is guaranteed never to throw and never to return a value that
cannot stand in for `value`.

The difference between this function and using an object spread or
`Object.assign()` is that all own enumerable properties (such as string keys)
_and non-enumerable symbols_ will included in the clone. However, non-symbol
non-enumerable properties will be ignored.

## Type Parameters

### T

`T`

## Parameters

### value

`T`

## Returns

`T`
