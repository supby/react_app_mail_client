import React, { Component } from 'react'
import loading from '../images/giphy.gif'

export default class Loading extends Component {
  render () {
    return (
      <React.Fragment>
        {this.props.isLoading && (<img src={loading} alt='Loading...' />)}
      </React.Fragment>
    )
  }
}
