import React from 'react';
import { View } from 'react-native';
import Iconicons from 'react-native-vector-icons/EvilIcons';

export default class Search extends React.Component {
    static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
        <Iconicons
          name="serch"
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
