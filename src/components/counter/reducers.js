import { combineReducers } from 'redux'
import {
  SELECT_PERIOD,
  REQUEST_BUILDS,
  RECEIVE_BUILDS
} from './actions'

function builds(
  state = {
    isFetching: false,
    buildTime: 0
  },
  action
) {
  switch (action.type) {
    case REQUEST_BUILDS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_BUILDS:
      return Object.assign({}, state, {
        isFetching: false,
        buildTime: action.buildTime
      })
    default:
      return state
  }
}


const rootReducer = combineReducers({
  builds
})

export default rootReducer
