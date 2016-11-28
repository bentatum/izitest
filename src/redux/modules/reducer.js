
import { combineReducers } from 'redux'
import { reducer as app } from 'redux/modules/app'
import { reducer as awaitReducer } from 'redux-await'

export default combineReducers({
  app,
  await: awaitReducer
})
