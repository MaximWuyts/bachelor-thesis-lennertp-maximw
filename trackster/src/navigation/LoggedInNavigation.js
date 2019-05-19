import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

//SCREENS
import HomeScreen from '../screens/HomeScreen';
import SubscriptionScreen from '../../src/screens/SubscriptionScreen';
import WarrantyScreen from '../screens/WarrantyScreen';
import SettingsScreen from '../screens/SettingsScreen';


const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" size={28} color={tintColor} />)
        },
    },
    Subscription: {
        screen: SubscriptionScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="social-youtube" size={28} color={tintColor} />)
        },
    },
    Warranties: {
        screen: WarrantyScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="check" size={28} color={tintColor} />)
        },
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="settings" size={28} color={tintColor} />)
        },
    },
},
    {
        tabBarOptions: {
            activeTintColor: "#65D8B9",
            inactiveTintColor: "#ACACAC",
            style: {
                backgroundColor: '#FFFFFF',
                height: 70
            },
            tabStyle: {
                padding: 5
            },
            labelStyle: {
                fontSize: 12,
            },
        }
    })


const MainNavigator = createAppContainer(TabNavigator);

class LoggedInNavigation extends React.Component {
    render = () => {
        return (
            <MainNavigator />
        )
    }
}

export default LoggedInNavigation;