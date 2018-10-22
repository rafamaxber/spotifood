import { httpGet } from '.'

describe('httpGet', () => {
  describe('Smoke test', () => {
    test('Should  be a function', () => {
      expect(typeof httpGet).toBe('function')
    })
  })
})
