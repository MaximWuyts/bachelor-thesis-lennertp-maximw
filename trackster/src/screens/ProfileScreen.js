import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
import AppHeader from '../components/AppHeader';

class ProfileScreen extends React.Component {
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
});

export default ProfileScreen;