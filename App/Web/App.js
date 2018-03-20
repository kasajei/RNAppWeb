import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { View, Text } from 'react-native'
// import RootContainer from './RootContainer'
import LaunchScreen from '../Containers/LaunchScreen'
import createStore from '../Redux'

// create our store
const store = createStore()

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
        <LaunchScreen/>
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default App
