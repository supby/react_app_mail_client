import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { loadSearchQueryShortResults } from '../../actions'

class SearchBar extends Component {
  constructor () {
    super()
    this.handleSearchDebounced = _.debounce(function (query) {
      this.props.searchQueryChanged(query)
    }, 1000)
  }

  onChange (e) {
    this.handleSearchDebounced(e.target.value)
    e.preventDefault()
  }

  render () {
    return (
      <div className='input-group mb-3'>
        <input type='text'
          onChange={this.onChange.bind(this)}
          className='form-control'
          placeholder='Search' />
        <div className='panel panel-default'>
          <ul className='list-group'>
            { this.props.results.map((el) =>
              <li key={el.id} className='list-group-item'>{el.text}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    results: state.searchBar.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchQueryChanged: query => dispatch(loadSearchQueryShortResults(query))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar)
