import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Calendar = props => (
  <div className="calendar-app">
     {props.name}!
  </div>
)

Calendar.defaultProps = {
  name: 'OnePay'
}

Calendar.propTypes = {
  name: PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
  return {
    hello: 'world',
  }
}

export default connect(mapStateToProps)(Calendar)
