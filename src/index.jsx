import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route } from 'react-router-dom'
import Auth from './Auth/Auth'
import { setAuth } from './actions'
import loadGAPI from './utils/gapiLoader'
import credentials from './config/credentials'
import { GOOG_SCOPE, DISCOVERY_DOCS } from './constants/goog'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const auth = new Auth()
store.dispatch(setAuth(auth.isAuthenticated()))

async function init() {
  return new Promise(async (resolve, reject) => {
    await loadGAPI()

    await window.gapi.auth.init()

    await window.gapi.client.init({
      apiKey: credentials.apiKey,
      clientId: credentials.clientId,
      discoveryDocs: DISCOVERY_DOCS,
      scope: GOOG_SCOPE
    })

    console.log('GAPI is loaded.')

    resolve()
  })
}

init().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Route path='/' render={(props) => <App auth={auth} {...props} />} />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'))
  registerServiceWorker()
})
