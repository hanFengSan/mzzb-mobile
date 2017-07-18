import { AppRegistry } from 'react-native';
import Home from './src/component/page/Home';
import AmazonRank from './src/component/page/AmazonRank';
import DailyRank from './src/component/page/DailyRank';
import Test from './src/component/page/Test';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    Home: { screen: Home },
    AmazonRank: { screen: AmazonRank },
    DailyRank: { screen: DailyRank },
    Test: {screen: Test}
}, { headerMode: 'screen' });

AppRegistry.registerComponent('light', () => App);
