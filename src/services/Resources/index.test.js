import { urlPlaylistsFilters, httpGetFeaturedPlaylistFilters } from '.'

describe('Resources', () => {
  describe('httpGetFeaturedPlaylistFilters', () => {
    describe('Smoke test', () => {
      test('Should be a function', () => {
        expect(typeof httpGetFeaturedPlaylistFilters).toBe('function')
      })
    })
  })

  describe('urlPlaylistsFilters', () => {
    describe('Smoke test', () => {
      test('Should be a valid mock http://www.mocky.io/v2/5a25fade2e0000213aa90776', () => {
        expect(urlPlaylistsFilters).toBe(
          'http://www.mocky.io/v2/5a25fade2e0000213aa90776'
        )
      })
    })
  })
})
