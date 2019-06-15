import React from 'react';
import { StyleSheet, Text, View, Alert, StatusBar, Image, Dimensions, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons'
import Logo from '../../../assets/white-logo-rev.png';
import Back from '../../../assets/login.jpg';
import { fire } from '../../keys/firebaseKeys';
import { Spinner } from '../../components/Spinner';

const { width: WIDTH } = Dimensions.get('window');

class ForgotPasswordScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            loading: false
        };
    }

    onResetPasswordPress = () => {
        this.setState({ loading: true })
        fire.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                this.setState({ loading: false })
                Alert.alert("Password reset email has been sent.");
                this.props.navigation.navigate('Login')
            }, (error) => {
                this.setState({ loading: false })
                Alert.alert(error.message);
            });
    }


    renderButton() {
        if (this.state.loading) {
            return (
                <View style={{ marginTop: 15 }}>
                    <Spinner size="small" />
                </View>
            )
        }
        return (

            <TouchableOpacity
                onPress={this.onResetPasswordPress}
                style={styles.btnLogin}>
                <Text style={styles.textStyle}>Send Mail</Text>
            </TouchableOpacity>
        );
    }

    render = () => {
        return (

            <ImageBackground source={Back} style={styles.background}>
                <KeyboardAwareScrollView
                    style={styles.scrollView}
                    automaticallyAdjustContentInsets={false}
                    keyboardShouldPersistTaps='always'
                    scrollEventThrottle={10}
                    extraHeight={250}
                    resetScrollToCoords={{ x: 0, y: 0 }}
                >
                    <StatusBar
                        translucent={false}
                        animated={false}
                        hidden={false}
                        opacity={0.7}
                        backgroundColor="black"
                        barStyle="light-content" />
                    <View style={styles.logoContainer}>
                        <Image source={Logo} style={styles.logo} />
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
                                value={this.state.email}
                                placeholder={'user@mail.com'}
                                placeholderTextColor={'#FFFFFF'}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => { this.setState({ email: text }) }}

                            />
                        </View>

                    </View>


                    {this.renderButton()}

                </KeyboardAwareScrollView>
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1
    },
    background: {
        flex: 1,
        height: null,
        width: null,
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    logo: {
        width: 120,
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
        width: WIDTH - 100,
        height: 60,
        fontSize: 18,
        paddingLeft: 75,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        marginHorizontal: 25,
        color: "white"
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
        width: WIDTH - 55,
        height: 50,
        marginTop: 75,
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
        marginTop: 10
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
        fontSize: 80,
        marginTop: 20,
        fontFamily: "SackersGothicStd-Light",
        color: "#E8E8E8",
    },
});

export default ForgotPasswordScreen;