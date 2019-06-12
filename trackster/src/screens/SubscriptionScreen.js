import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Content, Card } from 'native-base';
import AppHeader from '../components/AppHeader';
import SubscriptionList from '../components/SubscriptionList';
import SubscriptionPaidList from '../components/SubscriptionPaidList';

class SubscriptionScreen extends React.Component {

    render = () => {
        console.log('ander', this.props.navigation);
        const { listViewstyle, textHeaderStyle, contentStyle, textHeaderStyle2, iconAddStyle } = styles
        return (
            <ImageBackground source={require('../../assets/achtergrond.png')} style={styles.backgroundContainer}>
                <StatusBar
                    translucent={true}
                    animated={false}
                    hidden={false}
                    backgroundColor="transparent"
                    barStyle="light-content" />

                <AppHeader headerText="Subscriptions" navProp={this.props.navigation} />
                <Content style={listViewstyle}>
                    <View style={{ marginTop: 20, marginBottom: 5 }}>
                        <Text style={textHeaderStyle}>Upcomming Subscriptions</Text>
                    </View>
                    <Card style={contentStyle}>
                        <SubscriptionList screenProps={this.props.screenProps} navProp={this.props.navigation} />
                        <View style={iconAddStyle}>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('AddSubscription') }}
                            >
                                <Image source={require('../../assets/buttonkopie.png')} style={{ width: 50, height: 50 }} />
                            </TouchableOpacity>

                        </View>
                    </Card>
                    <View style={{ marginTop: 20, marginBottom: 5 }}>
                        <Text style={textHeaderStyle2}>Paid Subscriptions</Text>
                    </View>
                    <Card style={contentStyle}>
                        <SubscriptionPaidList screenProps={this.props.screenProps} navProp={this.props.navigation} />
                    </Card>
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
    contentStyle: {
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        backgroundColor: "#fff",
        elevation: 3,
    },
    listViewstyle: {
        paddingRight: 10,
        paddingLeft: 10
    },
    textHeaderStyle: {
        fontSize: 20,
        color: "#fff",
        marginTop: 12.5,
        marginBottom: 15,
        textAlign: "center"
    },
    textHeaderStyle2: {
        fontSize: 20,
        color: "#575757",
        marginTop: 12.5,
        textAlign: "center"
    },
    iconAddStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: -25,
        paddingBottom: -25
    }

});

export default SubscriptionScreen;