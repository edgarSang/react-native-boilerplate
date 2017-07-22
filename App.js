import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Count from './src/components/Count';
import { Provider } from 'react-redux';
import store from './src/reducers/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>React Native & Redux Example</Text>
          <Count/>
        </View>
      </Provider>
    );
  }
}
