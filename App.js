// import React from 'react';
// import { Text, AppRegistry } from 'react-native';

// const App = () => (
//   <Text>some tex</Text>
// );

// AppRegistry.registerComponent('coba1', () => App);
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Text>Hello!</Text>
      </View>
    );
  }
}