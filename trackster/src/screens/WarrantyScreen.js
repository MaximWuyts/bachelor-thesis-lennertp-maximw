import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Content, Card } from 'native-base';
import AppHeader from '../components/AppHeader';
import WarrantieList from '../components/WarrantieList';
import WarrantieListPaid from '../components/WarrantiePaidList';

class WarrantieScreen extends React.Component {

    render = () => {
        const { listViewstyle, textHeaderStyle, contentStyle, textHeaderStyle2, iconAddStyle, contentStyle2 } = styles
        return (
            <ImageBackground source={require('../../assets/achtergrond.png')} style={styles.backgroundContainer}>
                <StatusBar
                    translucent={true}
                    animated={false}
                    hidden={false}
                    backgroundColor="transparent"
                    barStyle="light-content" />

                <AppHeader headerText="Warranties" />
                <Content style={listViewstyle}>
                    <View style={{ marginTop: 20, marginBottom: 5 }}>
                        <Text style={textHeaderStyle}>Upcomming Warranties</Text>
                    </View>
                    <Card style={contentStyle2}>
                        <WarrantieList screenProps={this.props.screenProps} navProp={this.props.navigation} />
                        <View style={iconAddStyle}>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('AddWarrantie') }}
                            >
                                <Image source={require('../../assets/buttonkopie.png')} style={{ width: 50, height: 50 }} />
                            </TouchableOpacity>
                        </View>
                    </Card>
                    <View style={{ marginTop: 20, marginBottom: 5 }}>
                        <Text style={textHeaderStyle2}>Recently Expired</Text>
                    </View>
                    <Card style={contentStyle2}>
                        <WarrantieListPaid screenProps={this.props.screenProps} navProp={this.props.navigation} />
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

    contentStyle2: {

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

export default WarrantieScreen;
