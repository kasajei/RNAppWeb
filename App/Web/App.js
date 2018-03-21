import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { View, Text } from 'react-native'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import RootContainer from './RootContainer'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()


import createStore from '../Redux'
const store = createStore(history)

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <RootContainer/>
        </ConnectedRouter>
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default App
