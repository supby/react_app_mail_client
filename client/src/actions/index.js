import axios from "axios";


export function showSearchQueryShortResults(results) {
    return {
      type: 'SHOW_SHORT_SEARCH_RESULTS',
      results: results
    };
}

export function showEmailsList(list) {
    return {
      type: 'SHOW_EMAILS_LIST',
      list: list
    };
}

export function loadSearchQueryShortResults(query) {
    return (dispatch) => {
        
        if(!query) dispatch(showSearchQueryShortResults([]));

        // DEBUG: test data
        dispatch(showSearchQueryShortResults([
            { id: 1, text: 'sssss'},
            { id: 2, text: 'dddd'}
        ]));

        // axios
        // .get('http://localhost:5000/search')
        // .then(resp => dispatch(showSearchQueryShortResults(resp)));
    }
}

export function loadEmailsList(query) {
    return (dispatch) => {
        //if(!query) return;

        // DEBUG: test data
        dispatch(showEmailsList([
            { id: 1, title: 'Hi Andre. It is from ... 1'},
            { id: 2, title: 'Hi Andre. It is from ... 2'},
            { id: 3, title: 'Hi Andre. It is from ... 3'},
            { id: 4, title: 'Hi Andre. It is from ... 4'},
            { id: 5, title: 'Hi Andre. It is from ... 5'},
            { id: 6, title: 'Hi Andre. It is from ... 6'},
            { id: 7, title: 'Hi Andre. It is from ... 7'},
            { id: 8, title: 'Hi Andre. It is from ... 8'},
            { id: 9, title: 'Hi Andre. It is from ... 9'},
            { id: 10, title: 'Hi Andre. It is from ... 10'},
            { id: 11, title: 'Hi Andre. It is from ... 11'},
            { id: 12, title: 'Hi Andre. It is from ... 12'},
            { id: 13, title: 'Hi Andre. It is from ... 13'},
            { id: 14, title: 'Hi Andre. It is from ... 14'},
            { id: 15, title: 'Hi Andre. It is from ... 15'},
        ]));
    }
}