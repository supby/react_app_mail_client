import { SHOW_SHORT_SEARCH_RESULTS, SHOW_EMAILS_LIST, SET_AUTH } from '../constants/actions'

export function showSearchQueryShortResults (results) {
  return {
    type: SHOW_SHORT_SEARCH_RESULTS,
    results: results
  }
}

export function showEmailsList (list) {
  return {
    type: SHOW_EMAILS_LIST,
    list: list
  }
}

export function setAuth (isAuthenticated) {
  return {
    type: SET_AUTH,
    isAuthenticated: isAuthenticated
  }
}

export function loadSearchQueryShortResults (query) {
  return dispatch => {
    if (!query) dispatch(showSearchQueryShortResults([]))

    // DEBUG: test data
    dispatch(
      showSearchQueryShortResults([
        { id: 1, text: 'sssss' },
        { id: 2, text: 'dddd' }
      ])
    )
  }
}

export function loadEmailsList () {
  return async dispatch => {
    console.log('load emails')

    const res = await window.gapi.client.gmail.users.labels.list({'userId': 'me'})
    console.log(res)
    // DEBUG: test data
    // dispatch(
    //   showEmailsList([
    //     { id: 1, title: 'Hi Andre. It is from ... 1' },
    //     { id: 2, title: 'Hi Andre. It is from ... 2' },
    //     { id: 3, title: 'Hi Andre. It is from ... 3' },
    //     { id: 4, title: 'Hi Andre. It is from ... 4' },
    //     { id: 5, title: 'Hi Andre. It is from ... 5' },
    //     { id: 6, title: 'Hi Andre. It is from ... 6' },
    //     { id: 7, title: 'Hi Andre. It is from ... 7' },
    //     { id: 8, title: 'Hi Andre. It is from ... 8' },
    //     { id: 9, title: 'Hi Andre. It is from ... 9' },
    //     { id: 10, title: 'Hi Andre. It is from ... 10' },
    //     { id: 11, title: 'Hi Andre. It is from ... 11' },
    //     { id: 12, title: 'Hi Andre. It is from ... 12' },
    //     { id: 13, title: 'Hi Andre. It is from ... 13' },
    //     { id: 14, title: 'Hi Andre. It is from ... 14' },
    //     { id: 15, title: 'Hi Andre. It is from ... 15' }
    //   ])
    // )
  }
}
