import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { View, Text } from 'react-native'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import LaunchScreen from '../Containers/LaunchScreen'
import AboutScreen from '../Containers/AboutScreen'
import styles from './Styles/RootContainerStyles'


import createHistory from 'history/createBrowserHistory'
const history = createHistory()


import createStore from '../Redux'
const store = createStore(history)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <View style={styles.applicationView}>
            <Route exact path="/" component={LaunchScreen}/>
            <Route path="/about" component={AboutScreen}/>
          </View>
        </ConnectedRouter>
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default App
