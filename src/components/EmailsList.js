import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { loadEmailsList } from '../actions'

class EmailsList extends Component {

    componentDidMount() {
        this.props.loadEmailsList();
    }

    render() {
        return (
            <div>
            { this.props.list.map((el) => 
                    <div key={el.id}>{el.title}</div>)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
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
)(EmailsList);