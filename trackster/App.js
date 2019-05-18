import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//Screens
import LoginScreen from './src/screens/auth/LoginScreen';
import RegistrationScreen from './src/screens/auth/RegistrationScreen';
import BeginScreen from './src/screens/auth/BeginScreen';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer />
      </View>
    );
  }
}


const MainNavigator = createStackNavigator({

  BeginScreen: {
    screen: BeginScreen,
    navigationOptions: {
      header: null
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Registration: {
    screen: RegistrationScreen,
    navigationOptions: {
      header: null
    },
  },
});

const AppContainer = createAppContainer(MainNavigator);

const styles = StyleSheet.create({

});
