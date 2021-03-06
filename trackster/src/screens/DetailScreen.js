import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableOpacity, Image, Alert } from 'react-native';
import bgImage from '../../assets/otherback.png';
import AppOtherHeader from '../components/AppOtherHeader';
import { Content, Card } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign';
import ShowDocument from '../components/ShowDocument';
import moment from "moment";
import { db, fire } from '../keys/firebaseKeys';


class DetailScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.navigation.state.params.item.value.name,
            type: this.props.navigation.state.params.item.value.type,
            price: this.props.navigation.state.params.item.value.price,
            productType: this.props.navigation.state.params.item.value.productType,
            chosenDate: this.props.navigation.state.params.item.value.chosenDate,
            urlLink: this.props.navigation.state.params.item.value.urlLink,
            photo: this.props.navigation.state.params.item.value.photo,
        };
    }


    calculateDaysLeft = (endDate) => {
        endDate = !moment.isMoment(endDate) && moment(endDate)
        let startDate = moment().startOf('day');
        let diff = moment.duration(endDate.diff(startDate)).asDays();
        if (diff <= 30) {
            return <Text style={styles.rightTextStyle}>{diff} days left</Text>
        }
        if (diff >= 30 && diff < 40) {
            return <Text>1 month left</Text>
        }
        if (diff >= 40 && diff < 75) {
            return <Text>3 months left</Text>
        }
        if (diff >= 75 && diff < 200) {
            return <Text>5 months left</Text>
        }
        if (diff >= 200 && diff < 365) {
            return <Text>8 months left</Text>
        }
        if (diff >= 365 && diff < 500) {
            return <Text>1 year left</Text>
        }
        if (diff >= 500 & diff < 730) {
            return <Text>2 years left</Text>
        }
        if (diff >= 730) {
            return <Text>3 years left</Text>
        }

    }

    onEditPress = () => {
        this.props.navigation.navigate('EditDetail', { item: this.props.navigation.state.params.item, formType: this.props.navigation.state.params.formType })
    }

    onDeletePress = () => {

        if (this.props.navigation.state.params.formType === "warranty") {
            fire.database().ref(`warranties/${this.props.screenProps.user.uid}/${this.props.navigation.state.params.item.id}`)
                .remove()
                .then(() => {
                    this.props.navigation.navigate("Home");
                })
        }
        else {
            fire.database().ref(`subscriptions/${this.props.screenProps.user.uid}/${this.props.navigation.state.params.item.id}`)
                .remove()
                .then(() => {
                    this.props.navigation.navigate("Home");
                })
        }
    }


    render = () => {

        const { listViewstyle, textHeaderStyle, contentStyle, contentStyle2, importIconStyle, deleteTextStyle } = styles
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <StatusBar
                    translucent={true}
                    animated={false}
                    hidden={false}
                    backgroundColor="transparent"
                    barStyle="light-content" />
                <AppOtherHeader formType={"detail"} headerText={this.props.navigation.state.params.item.value.name} navProp={this.props.navigation} onEditPress={this.onEditPress} />

                <Content style={listViewstyle}>
                    <View>
                        <Text style={textHeaderStyle}>General Info</Text>
                    </View>
                    <Card style={contentStyle}>
                        <ShowDocument
                            formType={this.props.navigation.state.params.formType}
                            calculateDaysLeft={this.calculateDaysLeft}
                            warrantyDuration={this.props.navigation.state.params.item.value.warrantyDuration}
                            name={this.props.navigation.state.params.item.value.name}
                            type={this.props.navigation.state.params.item.value.type}
                            productType={this.props.navigation.state.params.item.value.productType}
                            price={this.props.navigation.state.params.item.value.price}
                            urlLink={this.props.navigation.state.params.item.value.urlLink}
                            chosenDate={this.props.navigation.state.params.item.value.chosenDate}
                        />
                    </Card>
                    <View style={{ marginTop: 20, marginBottom: 5 }}>
                        <Text style={textHeaderStyle}>Important Documents</Text>
                    </View>
                    <Card style={contentStyle}>
                        <TouchableOpacity onPress={this.onEditPress}>
                            {this.state.photo.uri === undefined ? <View style={contentStyle2}>
                                <Icon name="upload" size={30} color={"#04A7F1"} style={importIconStyle} />
                            </View> :
                                <View style={{ justifyContent: "center", padding: 20, alignItems: "center" }}>
                                    <Image
                                        source={{ uri: this.state.photo.uri }}
                                        style={{
                                            width: 150, height: 150,
                                        }}
                                    />
                                </View>
                            }


                        </TouchableOpacity>
                    </Card>

                </Content>
                <TouchableOpacity
                    onPress={() => Alert.alert(
                        'Delete Document',
                        'Are you sure you want to delete it?',
                        [
                            { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
                            { text: 'OK', onPress: this.onDeletePress },
                        ],
                        { cancelable: false }
                    )}
                >
                    <View>
                        <Text style={deleteTextStyle}>Delete</Text>
                    </View>
                </TouchableOpacity>
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
        marginBottom: 30
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
    },
    deleteTextStyle: {
        fontSize: 25,
        color: "#E03B3B",
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "bold"
    }
});

export default DetailScreen;