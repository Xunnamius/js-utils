[**@-xun/js**](../../README.md)

***

[@-xun/js](../../README.md) / [src](../README.md) / isEmptyRecord

# Function: isEmptyRecord()

> **isEmptyRecord**(`o`): `o is Record<PropertyKey, unknown>`

Defined in: [src/index.ts:131](https://github.com/Xunnamius/js-utils/blob/30e31427e1d2cec1853534f05afb32e5094b1a76/src/index.ts#L131)

This type guard function accepts any type and returns `true` if
[isRecord](isRecord.md) returns `true` and `o` contains no own property names
(including symbols).

## Parameters

### o

`unknown`

## Returns

`o is Record<PropertyKey, unknown>`
