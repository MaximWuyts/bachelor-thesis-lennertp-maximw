import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, Alert } from 'react-native';
import AppHeader from '../components/AppHeader';
import { Content, Card } from 'native-base'
import ProfileDetail from '../components/ProfileDetail';
import PersonalDetail from '../components/PersonalDetail';
import AddButton from '../components/AddButton';
import { fire } from '../keys/firebaseKeys';

class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            birthday: undefined,
            gender: undefined,
            country: undefined
        };
    }

    handleChange = (name, event) => {
        this.setState({
            [name]: event
        })
    }


    handleSubmit = (event) => {
        fire.database().ref(`personalDetails/${this.props.screenProps.user.uid}`).push({
            birthday: this.state.birthday,
            gender: this.state.gender,
            country: this.state.country
        }).then(() => {
            Alert.alert('success!');
        })
    }

    render = () => {
        console.log('soenfdnfkddskjnf', this.props.screenProps.user.email);
        const { backgroundContainer, headerStyle, listViewstyle, textHeaderStyle } = styles
        return (
            <ImageBackground source={require('../../assets/profileHeader.png')} style={backgroundContainer}>
                <StatusBar
                    translucent={true}
                    animated={false}
                    hidden={false}
                    backgroundColor="transparent"
                    barStyle="light-content" />

                <AppHeader headerText="Profile" navProp={this.props.navigation} />
                <Content style={listViewstyle}>
                    <View style={headerStyle}>
                        <Text style={textHeaderStyle}>General</Text>
                    </View>
                    <ProfileDetail email={this.props.screenProps.user.email} />
                    {/* <View style={headerStyle}>
                        <Text style={textHeaderStyle}>Personal</Text>
                    </View> */}
                    {/* <PersonalDetail
                        handleChange={this.handleChange}
                        birthday={this.state.birthday}
                        gender={this.state.gender}
                        country={this.state.country}
                    /> */}
                </Content>
                {/* <AddButton handleSubmit={this.handleSubmit}>
                    Save Profile
                </AddButton> */}
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
        marginTop: 50,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: "#D8D8D8"
    },
    listViewstyle: {
        paddingRight: 20,
        paddingLeft: 20
    },
    textHeaderStyle: {
        fontSize: 25,
        color: "#575757",
        marginBottom: 15,
        fontWeight: "700",
        textAlign: "center"
    },
});

export default ProfileScreen;