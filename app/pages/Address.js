import React from 'react';
import { View } from 'react-native';
import Iconicons from 'react-native-vector-icons/Entypo';

export default class Address extends React.Component {
    static navigationOptions = {
    //   title: '通讯录',
      tabBarLabel: '通讯录',
      tabBarIcon: ({ tintColor }) => (
        <Iconicons
          name="add-user"
          size={25}
          style={{ color: tintColor }}
        />
      ),
    }
    render() {
      return (
        <View>
          {/* <Text>通信录</Text> */}
        </View>
      );
    }
}
