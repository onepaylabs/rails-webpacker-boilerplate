import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

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

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Calendar name="OnePay Calendar" />,
    document.body.appendChild(document.createElement('div')),
  )
})
