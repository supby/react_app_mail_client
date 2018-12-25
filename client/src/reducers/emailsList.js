import { SHOW_EMAILS_LIST } from '../constants/actions'

const emailsListDefaultState = {
  list: [],
  isLoading: true
}

export const emailsList = (state = emailsListDefaultState, action) => {
  switch (action.type) {
    case SHOW_EMAILS_LIST:
      return { isLoading: action.payload.isLoading, list: action.payload.list }
    default:
      return state
  }
}
