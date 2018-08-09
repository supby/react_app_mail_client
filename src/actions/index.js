

function showShortResults(results) {
    return {
      type: 'SHOW_SHORT_SEARCH_RESULTS',
      payload: results
    };
}

function showEmailsList(results) {
    return {
      type: 'FILTER_EMAILS_LIST',
      payload: results
    };
}

function loadSearchQueryShortResults(query) {
    return (dispatch) => {
      // axious
    }
}

function loadEmailsList(query) {
    return (dispatch) => {
      // axious
    }
}