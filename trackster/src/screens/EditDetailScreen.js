import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableOpacity, Alert } from 'react-native';
import bgImage from '../../assets/otherback.png';
import AppOtherHeader from '../components/AppOtherHeader';
import { Content, Card } from 'native-base'
import AddDocument from '../components/AddDocument';
import Icon from 'react-native-vector-icons/AntDesign';
import EditDocument from '../components/EditDocument';
import AddButton from '../components/AddButton';
import moment from "moment";
import { fire } from '../keys/firebaseKeys';
import ImagePicker from "react-native-image-picker";

class EditDetailScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.navigation.state.params.item.value.name,
            type: this.props.navigation.state.params.item.value.type,
            price: this.props.navigation.state.params.item.value.price,
            productType: this.props.navigation.state.params.item.value.productType,
            chosenDate: this.props.navigation.state.params.item.value.chosenDate,
            urlLink: this.props.navigation.state.params.item.value.urlLink,
            photo: this.props.navigation.state.params.item.value.photo.uri,
        };
    }

    handleChange = (name, event) => {
        this.setState({
            [name]: event
        })
    }

    setDate = (newDate) => {
        let formattedDate = moment(newDate).format('MM-DD-YYYY');
        console.log('m', formattedDate);
        this.setState({ chosenDate: formattedDate });
    }

    handleSubmitSubscription = (event) => {
        fire.database().ref(`subscriptions/${this.props.screenProps.user.uid}/${this.props.navigation.state.params.item.id}`).update({
            name: this.state.name,
            type: this.state.type,
            price: this.state.price,
            productType: this.state.productType,
            chosenDate: this.state.chosenDate,
            urlLink: this.state.urlLink,
            photo: this.state.photo
        }).then(() => {
            this.props.navigation.navigate("Home");
        })
    }

    handleSubmitWarranty = (event) => {
        fire.database().ref(`warranties/${this.props.screenProps.user.uid}/${this.props.navigation.state.params.item.id}`).update({
            name: this.state.name,
            price: this.state.price,
            warrantyDuration: this.state.warrantyDuration,
            productType: this.state.productType,
            chosenDate: this.state.chosenDate,
            urlLink: this.state.urlLink
        }).then(() => {
            this.props.navigation.navigate("Home");
        })
    }

    calculateDaysLeft = (endDate) => {
        let startDate = moment()
        if (!moment.isMoment(startDate)) startDate = moment(startDate);
        if (!moment.isMoment(endDate)) endDate = moment(endDate);
        let days = endDate.diff(startDate, "days");
        if (days <= 30) {
            return <Text style={styles.rightTextStyle}>{days} days left</Text>
        }
        if (days > 30 && days < 40) {
            return <Text>1 month left</Text>
        }
        if (days > 60) {
            return <Text>2 months left</Text>
        }
        if (days > 365) {
            return <Text>1 year left</Text>
        }
        else
            <Text>3 years left</Text>

    }


    handleChoosePhoto = () => {
        const options = {
            noData: true
        }
        ImagePicker.launchImageLibrary(options, response => {
            console.log('response', response);
            if (response.uri) {
                this.setState({ photo: response })
            }
            Alert.alert('Image is added!')
        })

    }

    render = () => {
        console.log('tests', this.props.navigation.state.params.formType);
        const { listViewstyle, textHeaderStyle, contentStyle, contentStyle2, importIconStyle } = styles
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <StatusBar
                    translucent={true}
                    animated={false}
                    hidden={false}
                    backgroundColor="transparent"
                    barStyle="light-content" />
                <AppOtherHeader formType={"detail"} headerText={this.props.navigation.state.params.item.value.name} navProp={this.props.navigation} />

                <Content style={listViewstyle}>
                    <View>
                        <Text style={textHeaderStyle}>General Info</Text>
                    </View>
                    <Card style={contentStyle}>
                        <EditDocument
                            handleChange={this.handleChange}
                            formType={this.props.navigation.state.params.formType}
                            calculateDaysLeft={this.calculateDaysLeft}
                            warrantyDuration={this.state.warrantyDuration}
                            name={this.state.name}
                            type={this.state.type}
                            productType={this.state.productType}
                            price={this.state.price}
                            urlLink={this.state.urlLink}
                            chosenDate={this.state.chosenDate}
                        />
                    </Card>
                    <View style={{ marginTop: 20, marginBottom: 5 }}>
                        <Text style={textHeaderStyle}>Important Documents</Text>
                    </View>
                    <Card style={contentStyle}>
                        <TouchableOpacity onPress={this.handleChoosePhoto}>
                            <View style={contentStyle2}>
                                <Icon name="upload" size={30} color={"#04A7F1"} style={importIconStyle} />
                            </View>
                        </TouchableOpacity>
                    </Card>

                </Content>

                {this.props.navigation.state.params.formType === "subscription" ?
                    <View>
                        <AddButton handleSubmit={this.handleSubmitSubscription}>Edit Subscription</AddButton>
                    </View> :
                    <View>
                        <AddButton handleSubmit={this.handleSubmitWarranty}>Edit Warranty</AddButton>
                    </View>
                }

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

export default EditDetailScreen;