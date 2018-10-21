export const removeTheCountryLanguageReference = value =>
  value.replace(/.+_/gi, '')

export const flagPath = value => {
  return `https://www.countryflags.io/${removeTheCountryLanguageReference(
    value
  )}/flat/64.png`
}
