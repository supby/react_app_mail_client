import { SHOW_SHORT_SEARCH_RESULTS } from '../constants/actions'

const searchBarDefaultState = {
  results: []
}

export const searchBar = (state = searchBarDefaultState, action) => {
  switch (action.type) {
    case SHOW_SHORT_SEARCH_RESULTS:
      return { results: action.results }
    default:
      return state
  }
}
