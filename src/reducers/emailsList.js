const emailsListDefaultState = {
  list: []
}

export const emailsList = (state = emailsListDefaultState, action) => {
  switch (action.type) {
    case 'SHOW_EMAILS_LIST':
      return { list: action.list }
    default:
      return state
  }
}
