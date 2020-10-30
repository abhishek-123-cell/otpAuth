/**
 * @format
 */
import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native';
import App from './App';
// import setup from './setup';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
