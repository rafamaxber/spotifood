export const removeTheCountryLanguageReference = value =>
  value.replace(/.+_/gi, '')

export const flagPath = value => {
  return `https://www.countryflags.io/${removeTheCountryLanguageReference(
    value
  )}/flat/64.png`
}

export const getDefaultFilterValues = () => {
  if (window.navigator) {
    const locale =
      window.navigator.userLanguage || window.navigator.language || 'en-US'
    const country = locale.replace(/(.+)-/g, '')
    const timestamp = new Date()
    const limit = 10
    const offset = 1
    return {
      locale,
      country,
      timestamp,
      limit,
      offset
    }
  }
}
