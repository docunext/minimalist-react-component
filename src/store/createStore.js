import { applyMiddleware, compose, createStore } from 'redux';
import { browserHistory } from 'react-router';
import makeRootReducer from './reducers';
import { updateLocation } from './location';

export default (initialState = {}) => {
  const store = createStore(
    makeRootReducer(),
    initialState
  )
  store.asyncReducers = {}

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  if (browserHistory) {
    store.unsubscribeHistory = browserHistory.listen(updateLocation(store))
  }

  return store
}
