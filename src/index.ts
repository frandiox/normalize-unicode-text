import specialCharacters from './characters'

// References
// http://jkorpela.fi/chars/spaces.html
// https://unicode-search.net/unicode-namesearch.pl?term=ZERO%20WIDTH
// https://www.ptiglobal.com/2018/04/26/the-beauty-of-unicode-zero-width-characters/
const replacements: [RegExp, string][] = [
  [/[\u0300-\u036F]/g, ''], // accents
  [/[\u180E\u200B-\u200D\u2060\uFEFF]/g, ''], // zero-width
  [/[\u2420\u2422\u2423]/g, ' '], // visible spacial space chars
  [/[ \u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g, ' '], // space charters
  [/\s+/g, ' '], // new lines and tabs
]

/**
 * Normalizes diacritics, zero-width spaces and other non-latin characters
 */
export function normalizeUnicodeText(text: string): string {
  text = text.normalize('NFKD')
  for (const replacement of replacements) {
    text = text.replace(...replacement)
  }

  for (const [character, pattern] of specialCharacters) {
    text = text.replace(pattern, (match) =>
      match === match.toUpperCase() ? character : character.toLowerCase()
    )
  }

  return text
}
