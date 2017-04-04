import {AppRegistry} from 'react-native'
import Home from './src/component/page/Home';
import {StackNavigator} from 'react-navigation';

const App = StackNavigator({
    Home: { screen: Home }
});

AppRegistry.registerComponent('light', () => App);
