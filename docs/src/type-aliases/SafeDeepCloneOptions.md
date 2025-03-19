[**@-xun/js**](../../README.md)

***

[@-xun/js](../../README.md) / [src](../README.md) / SafeDeepCloneOptions

# Type Alias: SafeDeepCloneOptions

> **SafeDeepCloneOptions** = `object`

Defined in: [src/index.ts:9](https://github.com/Xunnamius/js-utils/blob/3df40ccd18d5b4088869d50725b32981f4bd1c30/src/index.ts#L9)

## See

[safeDeepClone](../functions/safeDeepClone.md)

## Properties

### transfer?

> `optional` **transfer**: `unknown`[]

Defined in: [src/index.ts:21](https://github.com/Xunnamius/js-utils/blob/3df40ccd18d5b4088869d50725b32981f4bd1c30/src/index.ts#L21)

An array of values that, if encountered, will be copied-by-reference rather
than cloned. This is useful when `value` contains references to objects
that should not be cloned but instead transferred as-is.

Unlike `structuredClone`:

- Any value can be transferred (strict comparison is used)
- Using `transfer` will never result in the modification of `value` nor the
  removal of any of its properties
