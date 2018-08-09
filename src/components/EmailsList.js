import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { loadSearchQueryShortResults } from '../actions'

class EmailsList extends Component {
    constructor() {
        super();
        this.state = { 
            searchQuery: '',
            resultList: []
        };

        this.handleSearchDebounced = _.debounce(function () {
            this.props.searchQueryChanged(this.props.searchQuery);
        }, 500);
    }

    searchQueryChanged(event) {        
        this.setState({searchQuery: event.target.value});
        this.handleSearchDebounced();
        event.preventDefault();
    }

    render() {
        return (
            <div>List of emails</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        emailsList: []
    }
  }
  ​
  const mapDispatchToProps = dispatch => {
    return {
      onEmailClick: query => {
        //dispatch(loadSearchQueryShortResults(query))
      }
    }
  }
  ​
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EmailsList);