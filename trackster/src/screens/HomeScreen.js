import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import bgImage from '../../assets/achtergrond.png';
import AppHeader from '../components/AppHeader';
import { Content, Card } from 'native-base';
import WarrantieList from '../components/WarrantieList';
import SubscriptionList from '../components/SubscriptionList';
import { connect } from 'react-redux';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
    }
    render = () => {
        const { listViewstyle, textHeaderStyle, contentStyle, textHeaderStyle2 } = styles
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <StatusBar
                    translucent={true}
                    animated={false}
                    hidden={false}
                    backgroundColor="transparent"
                    barStyle="light-content" />

                <AppHeader headerText="Home" navProp={this.props.navigation} />

                <Content style={listViewstyle}>
                    <View>
                        <Text style={textHeaderStyle}>Upcomming Warranties</Text>
                    </View>
                    <Card style={contentStyle}>
                        <WarrantieList screenProps={this.props.screenProps} navProp={this.props.navigation} />
                        {this.props.warranties.length === 0 ? null :
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Warranties')}>
                                <Text
                                    style={{ color: "#04A7F1", textAlign: "right", paddingRight: 20, paddingBottom: 10 }}>more</Text>
                            </TouchableOpacity>
                        }
                    </Card>
                    <View style={{ marginTop: 20, marginBottom: 15 }}>
                        <Text style={textHeaderStyle2}>Upcomming Subscriptions</Text>
                    </View>
                    <Card style={contentStyle}>
                        <SubscriptionList screenProps={this.props.screenProps} navProp={this.props.navigation} />
                        {this.props.subscriptions.length === 0 ? null :
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Subscription')}>
                                <Text
                                    style={{ color: "#04A7F1", textAlign: "right", paddingRight: 20, paddingBottom: 10 }}>more</Text>
                            </TouchableOpacity>
                        }
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
    listViewstyle: {
        paddingRight: 10,
        paddingLeft: 10
    },
    textHeaderStyle: {
        fontSize: 20,
        color: "#fff",
        marginBottom: 15,
        textAlign: "center"
    },
    textHeaderStyle2: {
        fontSize: 20,
        color: "#575757",
        marginTop: 12.5,
        textAlign: "center"
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
});

function mapStateToProps(state) {

    return {
        subscriptions: state.documentReducer.subscriptions,
        warranties: state.documentReducer.warranties
    }
};

export default connect(mapStateToProps, null)(HomeScreen);
