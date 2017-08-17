import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});
const createCalendarStore = applyMiddleware(thunk, logger)(createStore);

const configureStore = (onComplete: ?() => void) => {
  const store = autoRehydrate()(createOnePayStore)(reducers);

  if (isDebuggingInChrome) {
    window.store = store;
  }
  onComplete();
  return store;
}

export default configureStore
