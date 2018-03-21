import { createStore, applyMiddleware, compose } from 'redux'
import Config from '../Config/DebugConfig'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'


// creates the store
export default (rootReducer, rootSaga, history) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware({})
  middleware.push(sagaMiddleware)

  /* ------------- Router Middleware ------------- */

  middleware.push(routerMiddleware(history))

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const store = createStore(rootReducer, compose(...enhancers))

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
