# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/js[@2.0.0][3] (2025-05-31)

### 💥 BREAKING CHANGES 💥

- Minimum supported node version is now 20.18.0

### ✨ Features

- Implement new exports `isRecord` and `isEmptyRecord` ([904911c][4])

### ⚙️ Build System

- **deps:** bump core-js from 3.41.0 to 3.42.0 ([1e349a3][5])
- **package:** drop support for node\@18 ([c96e20a][6])

<br />

## @-xun/js[@1.1.0][7] (2025-03-19)

### ✨ Features

- **src:** add circular reference and "transferable objects" support to `safeDeepClone` ([2aab16b][8])
- **src:** implement `safeShallowClone` ([eddb7ad][9])

<br />

### 🏗️ Patch @-xun/js[@1.1.1][10] (2025-03-19)

#### 🪄 Fixes

- **src:** accurately type `SafeDeepCloneOptions` ([3df40cc][11])

<br />

## @-xun/js[@1.0.0][12] (2025-03-19)

### ✨ Features

- Implement `safeDeepClone` ([b3d2041][13])
- **src:** re-export toss-expression ([5e45a12][14])

### ⚙️ Build System

- **package:** add missing dependencies ([e06683b][15])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/js-utils/compare/@-xun/js@1.1.1...@-xun/js@2.0.0
[4]: https://github.com/Xunnamius/js-utils/commit/904911cbcf42233018533a138d7e49b945d8438a
[5]: https://github.com/Xunnamius/js-utils/commit/1e349a3639bf6146182de0eddf2bb6eb53b3a5c2
[6]: https://github.com/Xunnamius/js-utils/commit/c96e20a156798d41f929e82e812ec37c0d08251d
[7]: https://github.com/Xunnamius/js-utils/compare/@-xun/js@1.0.0...@-xun/js@1.1.0
[8]: https://github.com/Xunnamius/js-utils/commit/2aab16b0b027b86631e9bd05f443475c6514b772
[9]: https://github.com/Xunnamius/js-utils/commit/eddb7ad9b42011d6d69c174f61898936786b9325
[10]: https://github.com/Xunnamius/js-utils/compare/@-xun/js@1.1.0...@-xun/js@1.1.1
[11]: https://github.com/Xunnamius/js-utils/commit/3df40ccd18d5b4088869d50725b32981f4bd1c30
[12]: https://github.com/Xunnamius/js-utils/compare/e06683b7313a9c7a8d7ca40c4e700c8b45809933...@-xun/js@1.0.0
[13]: https://github.com/Xunnamius/js-utils/commit/b3d204166a294820f1ff6944fde1b816f6f98f3f
[14]: https://github.com/Xunnamius/js-utils/commit/5e45a12a45c848fd3d640a7003637314d339710f
[15]: https://github.com/Xunnamius/js-utils/commit/e06683b7313a9c7a8d7ca40c4e700c8b45809933
