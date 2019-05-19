import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { fire } from './src/keys/firebaseKeys';
import { Spinner } from './src/components/Spinner';
import LoggedOutNavigation from './src/navigation/LoggedOutNavigation';
import LoggedInNavigation from './src/navigation/LoggedInNavigation';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticationReady: false,
      isAuthenticated: false,
      user: null
    };
    fire.auth().onAuthStateChanged(this.onAuthStateChanged);
  }


  onAuthStateChanged = (user) => {
    this.setState({
      isAuthenticationReady: true,
      isAuthenticated: !!user,
      user
    })
  }

  render() {
    if (!this.state.isAuthenticationReady) {
      return (
        <Spinner size="large" />
      )
    }
    else {
      return (

        <View style={{ flex: 1 }}>
          {(this.state.isAuthenticated) ? <LoggedInNavigation screenProps={{ user: this.state.user }} /> : <LoggedOutNavigation />}
        </View>

      );
    }
  }
}




const styles = StyleSheet.create({

});
