import { AppRegistry } from 'react-native';
import Home from './src/component/page/Home';
import AmazonRank from './src/component/page/AmazonRank';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    Home: { screen: Home },
    AmazonRank: { screen: AmazonRank }
}, { headerMode: 'screen' });

AppRegistry.registerComponent('light', () => App);
