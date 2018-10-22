export default () => {
  self.addEventListener('message', event => { // eslint-disable-line no-restricted-globals
    setInterval(() => {
      postMessage('updateFeaturedPlaylist')
    }, 30000)
  })
}
