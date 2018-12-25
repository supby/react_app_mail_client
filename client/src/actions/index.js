import { SHOW_SHORT_SEARCH_RESULTS, SHOW_EMAILS_LIST, SET_AUTH } from '../constants/actions'

export function showSearchQueryShortResults (results) {
  return {
    type: SHOW_SHORT_SEARCH_RESULTS,
    results: results
  }
}

export function showEmailsList (payload) {
  return {
    type: SHOW_EMAILS_LIST,
    payload: payload
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
    const messageListResp = await window.gapi.client.gmail.users.messages.list({'userId': 'me'})

    const batch = window.gapi.client.newBatch()

    const getMessage = (messageId) => {
      return window.gapi.client.gmail.users.messages.get({ 'userId': 'me', 'id': messageId })
    }

    messageListResp.result.messages.forEach(el => {
      batch.add(getMessage(el.id))
    })
    const batchResult = await batch

    dispatch(
      showEmailsList({
        isLoading: false,
        list: Object.keys(batchResult.result)
                    .map(el => {
                      return {
                        id: batchResult.result[el].result.id,
                        title: batchResult.result[el].result.snippet
                      }
                    })
      }))
  }
}
