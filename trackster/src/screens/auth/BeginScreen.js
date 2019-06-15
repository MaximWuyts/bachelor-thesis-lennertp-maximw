import React from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableOpacity, Image, StatusBar, ImageBackground } from 'react-native';
import Logo from '../../../assets/white-logo-rev.png';
import Back from '../../../assets/backbegin.jpg';


const { width: WIDTH } = Dimensions.get('window');

class BeginScreen extends React.Component {
    render = () => {
        return (
            <ImageBackground source={Back} style={styles.background}>
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
                <View style={styles.headerStyle}>
                    <Text style={styles.headerText}>Xpyre</Text>
                </View>
                <View style={styles.buttonsStyle}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate("Login") }}
                        style={styles.loginStyle}>
                        <Text style={styles.textStyle}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate("Registration") }}
                        style={styles.createStyle}>
                        <Text style={styles.textStyle}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    headerStyle: {
        flex: 2
    },
    headerText: {
        textAlign: 'center',
        fontSize: 80,
        fontFamily: "SackersGothicStd-Light",
        color: "#E8E8E8"
    },
    logo: {
        width: 150,
        height: 180,
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
        flex: 2,
        marginTop: 50,
        marginBottom: 50,
        alignItems: 'center'
    },
    loginStyle: {
        width: WIDTH - 75,
        height: 50,
        borderRadius: 40,
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1
    },
    createStyle: {
        width: WIDTH - 75,
        height: 50,
        borderRadius: 40,
        marginTop: 20,
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1
    },
    textStyle: {
        color: '#fff',
        fontSize: 20,
        alignSelf: "center",
        textAlign: 'center',
        marginTop: 10
    },
    buttonsStyle: {
        flex: 2,
        marginBottom: 60,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default BeginScreen;
