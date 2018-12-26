import { SET_AUTH } from '../constants/actions'

const authDefaultState = {
  isAuthenticated: false
}

export const auth = (state = authDefaultState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return { isAuthenticated: action.isAuthenticated }
    default:
      return state
  }
}
