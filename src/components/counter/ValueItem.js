import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { firebase } from 'react-redux-firebase'

class ValueItem extends Component {
  static propTypes = {
    value: PropTypes.object,
    id: PropTypes.string
  }

  render(){
    const {firebase, value, id} = this.props
    return (
      <li className="Todo">
        {value.text}
      </li>
    )
  }
}
export default firebase()(ValueItem)