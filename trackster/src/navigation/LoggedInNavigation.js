import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import TestScreen from '../screens/TestScreen';

const TabNavigator = createBottomTabNavigator({
    test: {
        screen: TestScreen,
        navigationOptions: {
            tabBarLabel: "Test"
        }
    },
});


const MainNavigator = createAppContainer(TabNavigator);

class LoggedInNavigation extends React.Component {
    render = () => {
        return (
            <MainNavigator />
        )
    }
}

export default LoggedInNavigation;