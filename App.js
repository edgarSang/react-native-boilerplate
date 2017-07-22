import React from 'react';
import { Text, View } from 'react-native';
import Count from './src/components/Count';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>React Native & Redux Example</Text>
          <Count/>
        </View>
      </Provider>
    );
  }
}
