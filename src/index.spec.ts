import { normalizeUnicodeText } from '.'

describe('@utils', () => {
  describe('normalizeUnicodeText', () => {
    const testData = [
      ['hello', 'hello'],
      ['Coruña', 'Coruna'],
      ['äÄàÀãÃçÇõÕûÛýÝ', 'aAaAaAcCoOuUyY'],
      ['\u200D\uFEFF\u180E\u2060Invi\u200B\u200Csible', 'Invisible'],
      ['hello\u2423\u2422\u2420   world', 'hello world'],
      ['a\u2009\u2000\u2003\u3000\u205F\u200A\u0020\u00A0\u1680b', 'a b'],
      ['øqßweŁﬀÆǣ', 'oqssweLffAEae'],
    ]

    test.each(testData)(
      'normalizeUnicodeText work correctly for %s',
      (input, result) => {
        expect(normalizeUnicodeText(input)).toBe(result)
      }
    )
  })
})
