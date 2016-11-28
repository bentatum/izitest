
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './redux/create'
import { App } from './components'

render(
  <Provider store={createStore()}>
    <App />
  </Provider>,
  document.getElementById('application')
)
