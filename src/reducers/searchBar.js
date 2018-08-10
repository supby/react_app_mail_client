const searchBarDefaultState = {
    searchQuery: '',
    searchResults: []
};

export const searchBar = (state = searchBarDefaultState, action) => {
    switch (action.type) {
      case 'SHOW_SHORT_SEARCH_RESULTS':
        return { ...state,  searchResults: action.payload }
      default:
        return state
    }
}