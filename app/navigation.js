/**
 *2018-1-23 Fan Wenjie
 */

import { TabNavigator } from 'react-navigation';

import My from './pages/My';
import Information from './pages/Information';
import Address from './pages/Address';
import Discover from './pages/Discover';
// import Search from './pages/Search';

const RootNavigator = TabNavigator({
  Information: { screen: Information },
  Address: { screen: Address },
  Discover: { screen: Discover },
  My: { screen: My },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#00CC00',
    inactiveTintColor: '#999',
    style: { backgroundColor: 'white' },
    labelStyle: {
      fontSize: 12,
    },
    showIcon: 'true',
    indicatorStyle: {
      height: 0,
    },
  },
  navigationOptions: {
    headerTitle: ' 微信 ',
  },
});
const Navigations = {
  Main: {
    screen: RootNavigator,
  },
};
export default Navigations;

