import React from 'react';
import { View } from 'react-native';
import Iconicons from 'react-native-vector-icons/Octicons';

export default class My extends React.Component {
  static navigationOptions = {
    // title: '我的',
    tabBarLabel: '我的',
    tabBarIcon: ({ tintColor }) => (
      <Iconicons
        name="person"
        size={25}
        style={{ color: tintColor }}
      />
    ),
  }
  render() {
    return (
      <View>
        {/* <Text>我的</Text> */}
      </View>
    );
  }
}
