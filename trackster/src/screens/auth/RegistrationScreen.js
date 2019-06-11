import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, Image, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../../assets/white-logo-rev.png';
import Back from '../../../assets/register.jpg';
import { Card } from 'native-base';
import { fire } from '../../keys/firebaseKeys';
import { db } from '../../keys/firebaseKeys';
import { Spinner } from '../../components/Spinner';

const { width: WIDTH } = Dimensions.get('window');

class RegistrationScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showPassword: true,
            pressed: false,
            loading: false,
            email: "",
            password: "",
        };
    }

    showPassword = () => {
        if (!this.state.pressed) {
            this.setState({ showPassword: false, pressed: true })
        }
        else this.setState({ showPassword: true, pressed: false })
    }

    onSignupPress = () => {
        const { email, password } = this.state;
        this.setState({ loading: true })
        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((createdUser) => {
                Alert.alert('success!');
                //current registered user
                //saving it to the users table
                db.ref('users').child(createdUser.user.uid).set({
                    name: createdUser.user.displayName,
                    email: createdUser.user.email
                })
                    .then(() => {
                        this.setState({ loading: false })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
                (error) => {
                    Alert.alert(error.message);
                    this.setState({ loading: false })
                });
    }


    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }
        return (
            <TouchableOpacity
                onPress={this.onSignupPress}
                style={styles.btnLogin}>
                <Text style={styles.textStyle}>Create Account</Text>
            </TouchableOpacity>
        );
    }

    render = () => {
        return (
            <ImageBackground source={Back} style={styles.backgroundContainer}>
              <KeyboardAwareScrollView
                style={styles.scrollView}
                automaticallyAdjustContentInsets={false}
                keyboardShouldPersistTaps='always'
                scrollEventThrottle={10}
                extraHeight={250}
                resetScrollToCoords={{x: 0, y: 0}}
              >
                <StatusBar
                    translucent={true}
                    animated={false}
                    hidden={false}
                    backgroundColor="black"
                    opacity={0.7}
                    barStyle="light-content" />
                <View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.logo} />
                </View>

                <Card style={styles.cardStyle}>
                    <View style={styles.inputContainer}>
                        <Icon name='md-contact' size={30} color={'#fff'}
                            style={styles.inputIcon}
                        />
                        <TextInput
                            selectionColor={"#fff"}
                            style={styles.inputStyle}
                            placeholder={'first name'}
                            placeholderTextColor={'#fff'}
                            underlineColorAndroid='transparent'
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Icon name='md-contact' size={30} color={'#fff'}
                            style={styles.inputIcon}
                        />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder={'last name'}
                            placeholderTextColor={'#fff'}
                            underlineColorAndroid='transparent'
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Icon name='md-mail' size={30} color={'#fff'}
                            style={styles.inputIcon}
                        />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder={'user@mail.com'}
                            placeholderTextColor={'#fff'}
                            underlineColorAndroid='transparent'
                            value={this.state.email}
                            onChangeText={(text) => { this.setState({ email: text }) }}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name='md-lock' size={32} color={'#fff'}
                            style={styles.lockIcon}
                        />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder={'password'}
                            secureTextEntry={this.state.showPassword}
                            placeholderTextColor={'#fff'}
                            underlineColorAndroid='transparent'
                            value={this.state.password}
                            onChangeText={(text) => { this.setState({ password: text }) }}
                        />
                        <TouchableOpacity onPress={this.showPassword} style={styles.btnEye}>
                            <Icon name={this.state.pressed == false ? "md-eye-off" : "md-eye"} size={25} color={"#fff"} />
                        </TouchableOpacity>
                    </View>

                </Card>

                {this.renderButton()}


              </KeyboardAwareScrollView>
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
        width: 120,
        opacity: 0.8,
        height: 140,
        marginTop: 60,
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
        marginTop: -20
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
    inputContainer: {
        marginTop: 20
    },
    inputStyle: {
        width: WIDTH - 100,
        height: 50,
        fontSize: 18,
        paddingLeft: 75,
        marginHorizontal: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        color: 'white'
    },
    inputIcon: {
        position: 'absolute',
        top: 11,
        zIndex: +1,
        left: 50
    },
    lockIcon: {
        position: 'absolute',
        top: 8,
        left: 53,
        zIndex: +1,
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
        marginTop: 20,
        borderColor: 'white',
        borderWidth: 1
    },
    cardStyle: {
        paddingTop: 20,
        borderRadius: 30,
        paddingBottom: 40,
        width: WIDTH - 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0
    },
    textStyle: {
        color: 'rgba(255,255,255,1)',
        fontSize: 20,
        alignSelf: "center",
        textAlign: 'center',
        marginTop: 10
    }
});

export default RegistrationScreen;
