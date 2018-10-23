import Loadable from 'react-loadable'
import { Loading } from '.'

const LoadableWrapper = options =>
  Loadable({
    loading: Loading,
    delay: 300,
    ...options
  })

export default LoadableWrapper
