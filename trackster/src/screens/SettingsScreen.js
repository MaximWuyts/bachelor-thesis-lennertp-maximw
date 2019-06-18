import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground, StatusBar } from 'react-native';
import { fire } from '../keys/firebaseKeys';
import AppHeader from '../components/AppHeader';
import { Content, Card } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import AccountSettings from '../components/AccountSettings';
import Notifications from '../notifications/Notifications';

class SettingsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleAccount: true,
            toggleNotification: true
        }
    }

    ShowHideAccountComponentView = () => {
        if (this.state.toggleAccount == true) {
            this.setState({ toggleAccount: false })
        }
        else {
            this.setState({ toggleAccount: true })
        }
    }
    ShowHideNotificationComponentView = () => {
        if (this.state.toggleNotification == true) {
            this.setState({ toggleNotification: false })
        }
        else {
            this.setState({ toggleNotification: true })
        }
    }

    render = () => {
        const { backgroundContainer, listViewstyle, headerStyle, textHeaderStyle, arrowStyle } = styles;
        const { toggleAccount, toggleNotification } = this.state;
        return (
            <ImageBackground source={require('../../assets/betterHeader.png')} style={backgroundContainer}>
                <StatusBar
                    translucent={true}
                    animated={false}
                    hidden={false}
                    backgroundColor="transparent"
                    barStyle="light-content" />

                <AppHeader headerText="Settings" navProp={this.props.navigation} />

                <Content style={listViewstyle}>
                    <View style={headerStyle}>
                        <Text style={textHeaderStyle}>Account</Text>
                        <TouchableOpacity
                            style={arrowStyle}
                            onPress={this.ShowHideAccountComponentView}
                        >
                            <Icon

                                name="ios-arrow-down" size={30} color={"#575757"} />
                        </TouchableOpacity>

                    </View>
                    {toggleAccount ? null : <AccountSettings />}

                    <View style={headerStyle}>
                        <Text style={textHeaderStyle}>Notifications</Text>
                        <TouchableOpacity
                            style={arrowStyle}
                            onPress={this.ShowHideNotificationComponentView}
                        >
                            <Icon

                                name="ios-arrow-down" size={30} color={"#575757"} />
                        </TouchableOpacity>
                    </View>
                    {toggleNotification ? null : <Notifications />}


                    <View style={headerStyle}>
                        <Text style={textHeaderStyle}>Credits</Text>
                    </View>

                </Content>



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
    textHeaderStyle: {
        fontSize: 25,
        color: "#575757",
        marginBottom: 15,
        fontWeight: "700",
        textAlign: "center"
    },
    headerStyle: {
        marginTop: 50,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: "#D8D8D8"
    },
    arrowStyle: {
        position: 'absolute',
        top: 5,
        right: 25,
        opacity: 0.8
    },
    listViewstyle: {
        paddingRight: 20,
        paddingLeft: 20
    },
});

export default SettingsScreen;
