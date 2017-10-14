import {
  actions
} from '../actions'
import {
  initialState,
} from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return state
    default:
      return state
  }
}

export default reducer
