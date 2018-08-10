import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { loadSearchQueryShortResults } from '../actions'

class SearchBar extends Component {
    constructor() {
        super();

        this.handleSearchDebounced = _.debounce(function (query) {
            this.props.searchQueryChanged(query);
        }, 500);
    }

    searchQueryChanged(event) {
        this.handleSearchDebounced(event.target.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text"
                    onChange={this.searchQueryChanged.bind(this)}
                    value={this.props.searchQuery}
                    className="form-control"
                    placeholder="Search" />
                <div className="panel panel-default">
                    <ul className="list-group">
                        { this.props.searchResults.map((el) => 
                                <li class="list-group-item">{el.text}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        searchQuery: state.searchBar.searchQuery,
        searchResults: state.searchBar.searchResults
    }
};

const mapDispatchToProps = dispatch => {
    return {
        searchQueryChanged: query => dispatch(loadSearchQueryShortResults(query))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);