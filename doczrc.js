import { css } from 'docz-plugin-css'

export default {
  title: 'Spotifood docs',
  description: 'This is Spotifood component documentation',
  themeConfig: {
    colors: {
      primary: '#7f060a',
      secondary: 'khaki',
      gray: 'lightslategray'
    }
  },
  plugins: [
    css()
  ],
  dest: '/dest-docz',
  port: '3001'
}
