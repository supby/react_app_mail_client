const searchBar = (state = [], action) => {
    switch (action.type) {
      case 'SEARCH':
        return []
      default:
        return state
    }
  }
  ​
  export default searchBar