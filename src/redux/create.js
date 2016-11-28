
import reducer from './modules/reducer'
import { DevTools } from '../components'
import { persistState } from 'redux-devtools'
import { middleware as awaitMiddleware } from 'redux-await'
import { createStore, applyMiddleware, compose } from 'redux'

export default () => {
  const _createStore = compose(
    applyMiddleware(awaitMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore)

  return _createStore(reducer)
}
