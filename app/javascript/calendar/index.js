import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import calendarApp from './reducers'
import App from './components/App'
import styles from './styles'

let store = createStore(calendarApp)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),    
  )
})
