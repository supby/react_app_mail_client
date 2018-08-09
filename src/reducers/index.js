import { combineReducers } from 'redux'
import { searchBar } from './searchBar'
import { emailsList } from './emailsList'
​
export default combineReducers({
    searchBar,
    emailsList
})