const emailsListDefaultState = {
    emailsList: []
}

const emailsList = (state = emailsListDefaultState, action) => {
    switch (action.type) {
      case 'FILTER_EMAILS_LIST':
        return {...state, emailsList: action.payload};
      default:
        return state
    }
  }
  ​
export default emailsList