import axios from "axios";


export function showSearchQueryShortResults(results) {
    return {
      type: 'SHOW_SHORT_SEARCH_RESULTS',
      payload: results
    };
}

export function showEmailsList(results) {
    return {
      type: 'FILTER_EMAILS_LIST',
      payload: results
    };
}

export function loadSearchQueryShortResults(query) {
    return (dispatch) => {
        alert(query);
        if(!query) return;

        axios
        .get('http://localhost:5000/search')
        .then(resp => dispatch(showSearchQueryShortResults(resp)));
    }
}

export function loadEmailsList(query) {
    return (dispatch) => {
      // axious
    }
}