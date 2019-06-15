import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { fire } from '../keys/firebaseKeys';
import { Spinner } from '../components/Spinner';

const firebase = require('firebase');
const { width: WIDTH } = Dimensions.get('window');


class AccountSettings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            togglePassword: true,
            newPassword: undefined,
            currentPassword: undefined,
            showPassword: true,
            pressed: false,
            showPassword2: true,
            pressed2: false,
            loading: false
        };
    }

    ShowHideTextComponentView = () => {
        console.log('en werkte ');
        if (this.state.togglePassword == true) {
            this.setState({ togglePassword: false })
        }
        else {
            this.setState({ togglePassword: true })
        }
    }

    showPassword = () => {
        if (!this.state.pressed) {
            this.setState({ showPassword: false, pressed: true })
        }
        else this.setState({ showPassword: true, pressed: false })
    }

    showPassword2 = () => {
        if (!this.state.pressed2) {
            this.setState({ showPassword2: false, pressed2: true })
        }
        else this.setState({ showPassword2: true, pressed2: false })
    }

    onSignOutPress = () => {
        fire.auth().signOut()
            .then(() => { Alert.alert('Goodbye!') }, (error) => { Alert.alert(error.message); });
    }


    reauthenticate = (currentPassword) => {
        let user = fire.auth().currentUser;
        let cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    }

    onChangePassWord = () => {
        this.setState({ loading: true })
        this.reauthenticate(this.state.currentPassword)
            .then(() => {
                let user = fire.auth().currentUser;
                user.updatePassword(this.state.newPassword)
                    .then(() => {
                        Alert.alert("password was changed!")
                        this.setState({ loading: false, togglePassword: true })
                    })
                    .catch((error) => {
                        this.setState({ loading: false })
                        Alert.alert(error.message)
                    })
            })
            .catch((error) => {
                this.setState({ loading: false })
                Alert.alert(error.message)
            })
    }

    renderSpinner() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }
        return null;
    }

    render() {
        const { togglePassword, newPassword, showPassword, currentPassword, showPassword2 } = this.state;
        const { inputStyle, btnEye, btnTextStyle, btnStyle, linktextStyle, lastChildStyle } = styles;
        console.log('toggle', togglePassword);
        return (

            <View>
                <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                    <View style={lastChildStyle}>
                        <TouchableOpacity
                            onPress={this.onSignOutPress}
                        >
                            <Text style={linktextStyle}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={lastChildStyle}>
                        <TouchableOpacity
                            onPress={this.ShowHideTextComponentView}
                        >
                            <Text style={linktextStyle}>Change Password?</Text>
                        </TouchableOpacity>
                    </View>

                    {togglePassword ? null :
                        <View style={lastChildStyle}>
                            <View>
                                <TextInput
                                    style={inputStyle}
                                    value={currentPassword}
                                    placeholder={'Current Password'}
                                    selectionColor={"#d3d3d3"}
                                    secureTextEntry={showPassword}
                                    placeholderTextColor={'#d3d3d3'}
                                    underlineColorAndroid='transparent'
                                    onChangeText={(text) => { this.setState({ currentPassword: text }) }}
                                />
                                <TouchableOpacity onPress={this.showPassword} style={btnEye}>
                                    <Icon name={this.state.pressed == false ? "md-eye-off" : "md-eye"} size={25} color={"#d3d3d3"} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TextInput
                                    style={inputStyle}
                                    value={newPassword}
                                    placeholder={'Set New Password'}
                                    selectionColor={"#d3d3d3"}
                                    secureTextEntry={showPassword2}
                                    placeholderTextColor={'#d3d3d3'}
                                    underlineColorAndroid='transparent'
                                    onChangeText={(text) => { this.setState({ newPassword: text }) }}
                                />
                                <TouchableOpacity onPress={this.showPassword2} style={btnEye}>
                                    <Icon name={this.state.pressed2 == false ? "md-eye-off" : "md-eye"} size={25} color={"#d3d3d3"} />
                                </TouchableOpacity>

                            </View>
                            <TouchableOpacity
                                onPress={this.onChangePassWord}
                                style={btnStyle}><Text style={btnTextStyle}>Save Password</Text></TouchableOpacity>
                            {this.renderSpinner()}
                        </View>

                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        width: WIDTH - 100,
        height: 60,
        fontSize: 18,
        paddingLeft: 75,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: "#D8D8D8",
        marginHorizontal: 25,
        color: "#575757"
    },
    btnStyle: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        paddingLeft: 10,
        borderColor: "#04A7F1"
    },
    btnEye: {
        position: 'absolute',
        top: 20,
        right: 50,
        opacity: 0.8
    },
    lastChildStyle: {
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 15,
        paddingBottom: 7.5,
    },
    btnTextStyle: {
        fontSize: 17,


        color: "#04A7F1"
    },

    linktextStyle: {
        fontSize: 18,
        color: "#04A7F1"
    }
});

export default AccountSettings;