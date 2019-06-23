import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadEmailsList } from '../../actions'
import { Card } from 'react-bootstrap'
import Loading from '../Loading/Loading'

class EmailsList extends Component {
  componentDidMount () {
    this.props.loadEmailsList()
  }

  render () {
    return (
      <Loading isLoading={this.props.isLoading}>
        {
          this.props.list.map(el =>
            <Card key={el.id}>
              <Card.Body>{el.title}</Card.Body>
            </Card>)
        }
      </Loading>
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
