import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import logo from '../../../assets/icon.png';
import LinearGradient from 'react-native-linear-gradient';
import bgImage from '../../../assets/achtergrond.png';
import { Card } from 'native-base'

const { width: WIDTH } = Dimensions.get('window');

class LoginScreen extends React.Component {

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
            <LinearGradient colors={['#04A7F1', '#65D8B9']} style={styles.linearGradient}>
                <StatusBar
                    translucent={false}
                    animated={false}
                    hidden={false}
                    backgroundColor="#04A7F1"
                    barStyle="light-content" />
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <View style={styles.headerStyle}>
                    <Text style={styles.headerText}>Xpyre</Text>
                </View>
                <View style={styles.inputContent}>
                    <View style={styles.inputContainer}>
                        <Icon name='md-mail' size={30} color={'#FFFFFF'}
                            style={styles.inputIcon}
                        />
                        <TextInput
                            style={styles.inputStyle}
                            selectionColor={"#fff"}
                            placeholder={'user@mail.com'}
                            placeholderTextColor={'#FFFFFF'}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name='md-lock' size={32} color={'#FFFFFF'}
                            style={styles.lockIcon}
                        />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder={'password'}
                            selectionColor={"#fff"}
                            secureTextEntry={this.state.showPassword}
                            placeholderTextColor={'#FFFFFF'}
                            underlineColorAndroid='transparent'
                        />
                        <TouchableOpacity onPress={this.showPassword} style={styles.btnEye}>
                            <Icon name={this.state.pressed == false ? "md-eye-off" : "md-eye"} size={25} color={"#fff"} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{ marginTop: 20 }}>
                        <Text style={styles.textStyle2}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.textStyle}>Login</Text>
                </TouchableOpacity>



            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        height: null,
        width: null,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 120,
        opacity: 0.8,
        height: 140,
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
        alignItems: 'center',
        marginTop: 20
    },
    inputStyle: {
        width: WIDTH - 75,
        height: 60,
        borderRadius: 30,
        fontSize: 18,
        paddingLeft: 75,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: "#fff",
        marginHorizontal: 25
    },
    inputIcon: {
        position: 'absolute',
        top: 15,
        left: 50
    },
    lockIcon: {
        position: 'absolute',
        top: 13,
        left: 53
    },
    btnEye: {
        position: 'absolute',
        top: 20,
        right: 50,
        opacity: 0.6
    },
    btnLogin: {
        width: WIDTH - 75,
        height: 60,
        marginBottom: 75,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: 'transparent'
    },
    textStyle: {
        color: '#fff',
        fontSize: 20,
        alignSelf: "center",
        textAlign: 'center',
        marginTop: 15
    },
    textStyle2: {
        color: '#fff',
        fontSize: 20,
        alignSelf: "center",
        textAlign: 'center',
        marginTop: -5
    },
    inputContainer: {
        marginTop: 20
    },
    inputContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headerStyle: {
        marginTop: -30
    },
    headerText: {
        textAlign: 'center',
        fontSize: 100,
        fontFamily: "Taibaijan",
        color: "#E8E8E8",
    },
});

export default LoginScreen;