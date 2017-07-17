import { AppRegistry } from 'react-native';
import Home from './src/component/page/Home';
import AmazonRank from './src/component/page/AmazonRank';
import Test from './src/component/page/Test';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    Home: { screen: Home },
    AmazonRank: { screen: AmazonRank },
    Test: {screen: Test}
}, { headerMode: 'screen' });

AppRegistry.registerComponent('light', () => App);
