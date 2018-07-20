import React, { Component } from 'react';
import _ from 'lodash';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = { searchQuery: '' };

        this.handleSearchDebounced = _.debounce(function () {
            //this.props.handleSearch.apply(this, [this.state.query]);            
        }, 500);
    }

    searchQueryChanged(event) {        
        this.setState({searchQuery: event.target.value});
        this.handleSearchDebounced();
        event.preventDefault();
    }

    render() {
        return (
            <div className="form-group">
                <input type="text"
                    onChange={this.searchQueryChanged.bind(this)}
                    value={this.state.searchQuery}
                    className="form-control"
                    placeholder="Search" />
            </div>
        );
    }
}

export default SearchBar;