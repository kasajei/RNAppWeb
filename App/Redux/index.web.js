import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  github: require('./GithubRedux').reducer,
  search: require('./SearchRedux').reducer
})

export default (history) => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga, history)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
