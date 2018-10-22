import { httpGetFeaturedPlaylists, SPOTIFY_URL_AUTH, getToken } from '.'

describe('Spotify', () => {
  const instance = () => ({
    get: () =>
      Promise.resolve({
        data: 'mock - value'
      })
  })
  describe('httpGetFeaturedPlaylists', () => {
    describe('Smoke tests', () => {
      test('Should be a function', () => {
        expect(typeof httpGetFeaturedPlaylists).toBe('function')
      })

      test('Should return a correct data', () => {
        const filters = {
          test: 'value'
        }
        httpGetFeaturedPlaylists(filters, instance).then(data => {
          expect(data).toEqual({ data: 'mock - value' })
        })
      })
    })
  })

  describe('SPOTIFY_URL_AUTH', () => {
    test('Should be equal https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=token&redirect_uri=http://localhost/login', () => {
      expect(SPOTIFY_URL_AUTH).toBe(
        'https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=token&redirect_uri=http://localhost/login'
      )
    })
  })

  describe('getToken', () => {
    test('Should be a function', () => {
      expect(typeof getToken).toBe('function')
    })
  })
})
