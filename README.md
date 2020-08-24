# Normalize Unicode Text

Small typed function (~330 bytes) without dependencies that normalizes unicode text. Useful for normalizing strings such as shipping addresses for third party APIs.

- [x] Diacritics
- [x] Zero-width characters
- [x] Uncommon white spaces
- [x] Non-latin characters (see [this list](./src/characters.ts), PRs with more characters are welcome)

## Installation & Usage

```bash
yarn add normalize-unicode-text
```

Or drop it as `<script src="https://unpkg.com/normalize-unicode-text">`. In this case, use `window.normalizeUnicodeText`.

## Usage

```ts
import { normalizeUnicodeText } from 'normalize-unicode-text'

console.log(normalizeUnicodeText('øqßweŁﬀÆǣ'))
// oqssweLffAEae

console.log(normalizeUnicodeText('äÄàÀãÃçÇõÕûÛýÝñ'))
// aAaAaAcCoOuUyYn
```
