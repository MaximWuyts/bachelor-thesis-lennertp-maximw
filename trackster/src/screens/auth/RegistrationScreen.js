import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import logo from '../../assets/icon-eindwerk.png';
import bgImage from '../../assets/backgroundimage.png';


const { width: WIDTH } = Dimensions.get('window');

class RegistrationScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showPassword: true,
            pressed: false,

        }
    }

    showPassword = () => {
        if (!this.state.pressed) {
            this.setState({ showPassword: false, pressed: true })
        }
        else this.setState({ showPassword: true, pressed: false })
    }

    render = () => {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <StatusBar
                    translucent={false}
                    animated={false}
                    hidden={true}
                    backgroundColor="rgba(83, 79, 98, 0.8)"
                    barStyle="light-content" />
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                </View>


                <View style={styles.inputContainer}>
                    <Icon name='md-contact' size={30} color={'rgba(255,255,255,0.7)'}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder={'first name'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name='md-contact' size={30} color={'rgba(255,255,255,0.7)'}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder={'last  name'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name='md-mail' size={30} color={'rgba(255,255,255,0.7)'}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder={'user@mail.com'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name='md-lock' size={32} color={'rgba(255,255,255,0.7)'}
                        style={styles.lockIcon}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder={'password'}
                        secureTextEntry={this.state.showPassword}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                    <TouchableOpacity onPress={this.showPassword} style={styles.btnEye}>
                        <Icon name={this.state.pressed == false ? "md-eye-off" : "md-eye"} size={25} color={"#fff"} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.btnLogin}>
                    <Text style={styles.textStyle}>Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate("Login") }}
                    style={{ marginTop: 20 }}>
                    <Text style={styles.textStyle}>Log In!</Text>
                </TouchableOpacity>


            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        height: null,
        width: null,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 150,
        opacity: 0.8,
        height: 120,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        // Android
        shadowOffset: {
            width: 5,            // Same rules apply from above
            height: 1,           // Can't both be 0
        },
    },
    logoContainer: {
        marginBottom: 40,
        alignItems: 'center'
    },
    inputContainer: {
        marginTop: 20
    },
    inputStyle: {
        width: WIDTH - 55,
        height: 50,
        borderRadius: 30,
        fontSize: 18,
        paddingLeft: 75,
        backgroundColor: 'rgba(69,187,239, 0.36)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25
    },
    inputIcon: {
        position: 'absolute',
        top: 11,
        left: 50
    },
    lockIcon: {
        position: 'absolute',
        top: 8,
        left: 53
    },
    btnEye: {
        position: 'absolute',
        top: 13,
        right: 50,
        opacity: 0.6
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 50,
        borderRadius: 30,
        marginTop: 40,
        backgroundColor: 'rgba(4,167,241,0.75)'
    },
    textStyle: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 20,
        alignSelf: "center",
        textAlign: 'center',
        marginTop: 10
    }
});

export default RegistrationScreen;