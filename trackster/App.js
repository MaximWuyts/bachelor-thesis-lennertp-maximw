import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/auth/LoginScreen';


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LoginScreen />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
