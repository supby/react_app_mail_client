import { combineReducers } from 'redux'
import { searchBar } from './searchBar'
import { emailsList } from './emailsList'
import { auth } from './auth'

export default combineReducers({
  auth,
  searchBar,
  emailsList
})
