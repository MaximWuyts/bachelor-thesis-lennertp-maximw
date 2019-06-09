import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
import bgImage from '../../assets/otherback.png';
import AppOtherHeader from '../components/AppOtherHeader';
import { Content, Card } from 'native-base'
import AddDocument from '../components/AddDocument';
import { fire } from '../keys/firebaseKeys';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from "moment";
import AddButton from '../components/AddButton';

class AddSubscriptionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: undefined,
            type: undefined,
            price: undefined,
            productType: undefined,
            chosenDate: new Date(),
            urlLink: undefined
        };
    }

    handleChange = (name, event) => {
        this.setState({
            [name]: event
        })
    }

    setDate = (newDate) => {
        let formattedDate = moment(newDate).format('MM-DD-YYYY');
        this.setState({ chosenDate: formattedDate });
    }


    handleSubmit = (event) => {
        fire.database().ref(`subscriptions/${this.props.screenProps.user.uid}`).push({
            name: this.state.name,
            type: this.state.type,
            price: this.state.price,
            productType: this.state.productType,
            chosenDate: this.state.chosenDate,
            urlLink: this.state.urlLink
        }).then(() => {
            this.props.navigation.navigate("Home");
        })
    }



    render = () => {
        const { listViewstyle, textHeaderStyle, contentStyle, contentStyle2, importIconStyle } = styles
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <StatusBar
                    translucent={true}
                    animated={false}
                    hidden={false}
                    backgroundColor="transparent"
                    barStyle="light-content" />
                <AppOtherHeader headerText={"Add Subscription"} navProp={this.props.navigation} />

                <Content style={listViewstyle}>
                    <View>
                        <Text style={textHeaderStyle}>General Info</Text>
                    </View>
                    <Card style={contentStyle}>
                        <AddDocument
                            formType="subscription"
                            handleChange={this.handleChange}
                            setDate={this.setDate}
                            name={this.state.name}
                            type={this.state.type}
                            productType={this.state.productType}
                            price={this.state.price}
                            urlLink={this.state.urlLink}
                        />
                    </Card>
                    <View style={{ marginTop: 20, marginBottom: 5 }}>
                        <Text style={textHeaderStyle}>Important Documents</Text>
                    </View>
                    <Card style={contentStyle}>
                        <View style={contentStyle2}>
                            <Icon name="upload" size={30} color={"#04A7F1"} style={importIconStyle} />
                        </View>
                    </Card>

                </Content>
                <AddButton handleSubmit={this.handleSubmit}>Add Subscription</AddButton>
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
        fontWeight: "700",
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
    contentStyle2: {
        margin: 20,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#04A7F1'
    },
    importIconStyle: {
        padding: 10,
    }
});

export default AddSubscriptionScreen;