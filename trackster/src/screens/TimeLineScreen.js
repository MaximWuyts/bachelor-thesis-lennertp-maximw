import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import NavHeader from '../components/NavHeader';

class TimelineScreen extends React.Component {
    render = () => {
        const { backgroundContainer, headerStyle } = styles
        return (
            <ImageBackground source={require('../../assets/axchtergrond.png')} style={backgroundContainer}>
                <StatusBar
                    translucent={true}
                    animated={false}
                    hidden={false}
                    backgroundColor="transparent"
                    barStyle="light-content" />

                <AppHeader headerText="Timeline" navProp={this.props.navigation} />

                <NavHeader />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        height: null,
        width: null,
        fontFamily: "HelveticaNeueBold",
    },
    headerStyle: {
        marginTop: 30,
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textHeaderStyle: {

    }
});

export default TimelineScreen;