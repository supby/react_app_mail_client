import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadEmailsList } from '../actions'
import { Panel } from 'react-bootstrap'
import loading from '../images/giphy.gif'

class EmailsList extends Component {
  componentDidMount () {
    this.props.loadEmailsList()
  }

  render () {
    return (
      <React.Fragment>
        {this.props.isLoading && (<img src={loading} alt='Loading...' />)}
        {
          !this.props.isLoading &&
          (this.props.list.map((el) =>
            <Panel key={el.id}>
              <Panel.Body>{el.title}</Panel.Body>
            </Panel>))
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.emailsList.isLoading,
    list: state.emailsList.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadEmailsList: query => {
      dispatch(loadEmailsList())
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailsList)
