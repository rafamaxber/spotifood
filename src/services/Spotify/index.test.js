import { httpGetFeaturedPlaylists, SPOTIFY_URL_AUTH, getToken } from '.'
import '../../__mocks__/ localStorage'
jest.mock('axios')
describe('Spotify', () => {
  describe('httpGetFeaturedPlaylists', () => {
    describe('Smoke tests', () => {
      test('Should be a function', () => {
        expect(typeof httpGetFeaturedPlaylists).toBe('function')
      })

      test('Should be equal https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=token&redirect_uri=http://localhost/login', () => {
        expect(SPOTIFY_URL_AUTH).toBe(
          'https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=token&redirect_uri=http://localhost/login'
        )
        console.log(process.env.SPOTIFY_CLIENT_ID)
      })

      test('Should be a function', () => {
        expect(typeof getToken).toBe('function')
      })
    })
  })
})
