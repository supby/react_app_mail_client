import React from 'react'
import loading from './giphy.gif'

export default (props) => (
  <React.Fragment>
    {props.isLoading && (<img src={loading} alt='Loading...' />)}
    {!props.isLoading && (props.children)}
  </React.Fragment>
)
