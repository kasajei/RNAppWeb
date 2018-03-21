import { StackNavigator } from 'react-navigation'
import TodoScreen from '../Containers/TodoScreen'
import AboutScreen from '../Containers/AboutScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  TodoScreen: { screen: TodoScreen },
  AboutScreen: { screen: AboutScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
