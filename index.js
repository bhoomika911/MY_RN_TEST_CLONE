import 'react-native-gesture-handler' // leave at the top: https://reactnavigation.org/docs/en/getting-started.html
/* global document */
import { AppRegistry, Platform } from 'react-native'
import App from './src/App'

AppRegistry.registerComponent('MyantSkiin', () => App)

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main')
  AppRegistry.runApplication('MyantSkiin', { rootTag })
}
