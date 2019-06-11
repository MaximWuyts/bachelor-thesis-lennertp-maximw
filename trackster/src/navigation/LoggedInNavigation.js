import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'

//SCREENS
import HomeScreen from '../screens/HomeScreen';
import SubscriptionScreen from '../../src/screens/SubscriptionScreen';
import WarrantyScreen from '../screens/WarrantyScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddWarrantieScreen from '../screens/AddWarrantieScreen';
import AddSubscriptionScreen from '../screens/AddSubscriptionScreen';
import DetailScreen from '../screens/DetailScreen';
import EditDetailScreen from '../screens/EditDetailScreen';

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
                <EvilIcon name="play" size={42} color={tintColor} />)
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



const RootNavigation = createStackNavigator({
    Home: {
        screen: TabNavigator,
        navigationOptions: {
            header: null
        }
    },
    AddWarrantie: {
        screen: AddWarrantieScreen,
        navigationOptions: {
            header: null
        },
    },
    AddSubscription: {
        screen: AddSubscriptionScreen,
        navigationOptions: {
            header: null
        },
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            header: null
        },
    },
    EditDetail: {
        screen: EditDetailScreen,
        navigationOptions: {
            header: null
        },
    },

});

const Root = createAppContainer(RootNavigation);



class LoggedInNavigation extends React.Component {

    render = () => {

        return (
            <Root screenProps={this.props.screenProps} />
        )
    }
}

export default LoggedInNavigation;