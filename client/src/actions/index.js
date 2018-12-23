import { SHOW_SHORT_SEARCH_RESULTS, SHOW_EMAILS_LIST, SET_AUTH } from '../constants/actions'
import credentials from '../config/credentials'

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

    // axios
    // .get('http://localhost:5000/search')
    // .then(resp => dispatch(showSearchQueryShortResults(resp)));
  }
}

export function loadEmailsList () {
  return async dispatch => {
    const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest']
    const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly'
    console.log('load emails')

    window.gapi.client.init({
      apiKey: credentials.apiKey,
      clientId: credentials.clientId,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then((resp) => {
      console.log('load emails 2')

      window.gapi.client.gmail.users.messages.list({
        'userId': 'me'
      }).then((resp2) => {
        console.log(resp2)
      })
    })
    // let res = await window.gapi.client.init({
    //   apiKey: credentials.apiKey,
    //   clientId: credentials.clientId,
    //   discoveryDocs: DISCOVERY_DOCS,
    //   scope: SCOPES
    // })
    // console.log('load emails 2')
    // res = await window.gapi.client.gmail.users.messages.list({
    //   'userId': 'me'
    // })
    // console.log('load emails 3')
    // console.log(res.reseult.messages)
    // dispatch(showEmailsList(res.reseult.messages))
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
