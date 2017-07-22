import React, { Component } from 'react';
import { Text, View } from 'react-native';
import log from 'loglevel';
import Count from './src/components/Count';
import { Provider } from 'react-redux';
import store from './src/reducers/store';

if (process.env.NODE_ENV === 'development') {
  log.setLevel('trace', true);
} else {
  log.setLevel('error', true);
}

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
