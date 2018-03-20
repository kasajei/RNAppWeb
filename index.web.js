import App from './App/Web/App'
import { AppRegistry } from 'react-native'

AppRegistry.registerComponent('App', () => App)
AppRegistry.runApplication('App', { rootTag: document.getElementById('react-root') })