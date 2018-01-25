import React from 'react';
import { View } from 'react-native';
import Iconicons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Discover extends React.Component {
    static navigationOptions = {
    //   title: '发现',
      tabBarLabel: '发现',
      tabBarIcon: ({ tintColor }) => (
        <Iconicons
          name="compass-outline"
          size={25}
          style={{ color: tintColor }}
        />
      ),
    }
    render() {
      return (
        <View>
          {/* <Text>发现</Text> */}
        </View>
      );
    }
}

