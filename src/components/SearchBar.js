import React, { Component } from 'react';
import _ from 'lodash';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = { 
            searchQuery: '',
            resultList: []
        };

        this.handleSearchDebounced = _.debounce(function () {
            this.props.handleSearch.apply(this, [this.state.searchQuery]);            
        }, 500);
    }

    searchQueryChanged(event) {        
        this.setState({searchQuery: event.target.value});
        this.handleSearchDebounced();
        event.preventDefault();
    }

    render() {
        return (
            <div class="input-group mb-3">
                <input type="text"
                    onChange={this.searchQueryChanged.bind(this)}
                    value={this.state.searchQuery}
                    className="form-control"
                    placeholder="Search" />
                <div class="panel panel-default">
                    <ul class="list-group">
                        { this.state.resultList.map((el) => 
                                <li class="list-group-item">{el}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SearchBar;