import React from 'react';
import { View } from 'react-native';
import Iconicons from 'react-native-vector-icons/EvilIcons';

export default class Information extends React.Component {
    static navigationOptions = {
    //   title: '信息',
      tabBarLabel: '信息',
      tabBarIcon: ({ tintColor }) => (
        <Iconicons
          name="comment"
          size={25}
          style={{ color: tintColor }}
        />
      ),
    }
    render() {
      return (
        <View>
          {/* <Text>信息</Text> */}
        </View>
      );
    }
}

