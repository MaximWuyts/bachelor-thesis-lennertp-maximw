import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TabNavigator from './LoggedInNavigation';

//Screens
import LoginScreen from '../screens/auth/LoginScreen';
import RegistrationScreen from '../screens/auth/RegistrationScreen';
import BeginScreen from '../screens/auth/BeginScreen';
import AddDocScreens from '../screens/AddWarrantieScreen';

const LoggedOutNavigator = createStackNavigator({

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
    Home: {
        screen: TabNavigator,
        navigationOptions: {
            header: null
        }
    },
});

const RootNavigator = createAppContainer(LoggedOutNavigator);

class LoggedOutNavigation extends React.Component {
    render = () => {
        return (
            <RootNavigator />
        )
    }
}

export default LoggedOutNavigation;