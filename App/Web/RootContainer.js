import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Route } from 'react-router'

import StartupActions from '../Redux/StartupRedux'
// Styles
import styles from './Styles/RootContainerStyles'
import LaunchScreen from '../Containers/LaunchScreen'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    this.props.startup()
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <Route exact path="/" component={LaunchScreen}/>
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
