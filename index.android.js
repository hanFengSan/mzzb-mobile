import { AppRegistry } from 'react-native';
import Home from './src/component/page/Home';
import AmazonRank from './src/component/page/AmazonRank';
import Test from './src/component/page/Test';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    AmazonRank: { screen: AmazonRank },
    Home: { screen: Home },
    Test: {screen: Test}
}, { headerMode: 'screen' });

AppRegistry.registerComponent('light', () => App);
