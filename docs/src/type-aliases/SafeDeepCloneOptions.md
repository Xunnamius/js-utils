[**@-xun/js**](../../README.md)

***

[@-xun/js](../../README.md) / [src](../README.md) / SafeDeepCloneOptions

# Type Alias: SafeDeepCloneOptions

> **SafeDeepCloneOptions** = `object`

Defined in: [src/index.ts:9](https://github.com/Xunnamius/js-utils/blob/30e31427e1d2cec1853534f05afb32e5094b1a76/src/index.ts#L9)

## See

[safeDeepClone](../functions/safeDeepClone.md)

## Properties

### transfer?

> `optional` **transfer**: `unknown`[]

Defined in: [src/index.ts:21](https://github.com/Xunnamius/js-utils/blob/30e31427e1d2cec1853534f05afb32e5094b1a76/src/index.ts#L21)

An array of values that, if encountered, will be copied-by-reference rather
than cloned. This is useful when `value` contains references to objects
that should not be cloned but instead transferred as-is.

Unlike `structuredClone`:

- Any value can be transferred (strict comparison is used)
- Using `transfer` will never result in the modification of `value` nor the
  removal of any of its properties
