import React from 'react'
import loading from '../images/giphy.gif'

export default (props) => (
  <React.Fragment>
    {props.isLoading && (<img src={loading} alt='Loading...' />)}
    {!props.isLoading && (props.children)}
  </React.Fragment>
)
