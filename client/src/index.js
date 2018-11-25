import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route } from "react-router-dom";
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} /> 
        }}/>
      </div>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root'))
registerServiceWorker()
