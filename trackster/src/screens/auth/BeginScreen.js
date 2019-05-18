import React from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../../assets/icon.png';

const { width: WIDTH } = Dimensions.get('window');

class BeginScreen extends React.Component {
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

            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    headerStyle: {
        flex: 2
    },
    headerText: {
        textAlign: 'center',
        fontSize: 120,
        fontFamily: "Taibaijan",
        color: "#E8E8E8",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    logo: {
        width: 200,
        opacity: 0.8,
        height: 233,
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
        borderRadius: 10,
        backgroundColor: '#65D8B9'
    },
    createStyle: {
        width: WIDTH - 75,
        height: 50,
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: '#04A7F1'
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