import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { db, fire } from '../keys/firebaseKeys';
import Icon from 'react-native-vector-icons/Ionicons'
import moment from "moment";

class SubscriptionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subscriptions: []
        }
    }

    componentDidMount = () => {
        //cards
        console.log("test");
        let subscriptions = [];
        db.ref(`subscriptions/${this.props.screenProps.user.uid}`).on('value', (snap) => {

            if (snap.val()) {
                let values = snap.val();

                Object.keys(values).forEach(key => {
                    subscriptions.push({
                        id: key,
                        value: values[key]
                    })
                });
                this.setState({
                    subscriptions
                })
            }
        });
    }

    getIcon = (productType) => {
        if (productType === 'online') {
            return <Icon name='md-laptop' size={32} color={'#04A7F1'} style={{ marginTop: -5 }} />
        }
        if (productType === 'financial') {
            return <Icon name='md-card' size={32} color={'#04A7F1'} style={{ marginTop: -5 }} />
        }
        if (productType === 'transport') {
            return <Icon name='md-car' size={32} color={'#04A7F1'} style={{ marginTop: -5 }} />
        }
        return <Icon name='md-phone-portrait' size={32} color={'#04A7F1'} style={{ marginTop: -5 }} />
    }

    calculateDaysLeft = (endDate) => {
        let startDate = moment()
        if (!moment.isMoment(startDate)) startDate = moment(startDate);
        if (!moment.isMoment(endDate)) endDate = moment(endDate);
        console.log(endDate);
        console.log(startDate);
        let days = endDate.diff(startDate, "days");
        if (days <= 30) {
            return <Text style={styles.rightTextStyle}>{days} days left</Text>
        }
        if (days > 30 && days < 40) {
            return <Text style={styles.rightTextStyle}>1 month left</Text>
        }
        if (days > 60) {
            return <Text style={styles.rightTextStyle}>2 months left</Text>
        }
        if (days > 365) {
            return <Text style={styles.rightTextStyle}>1 year left</Text>
        }

    }


    render() {
        const { listViewstyle, leftTextStyle, rightTextStyle, listViewstyleNoBorder, noListViewstyle, noListTextStyle, noListTextStyle2, iconStyle } = styles
        return (
            // <TouchableOpacity onPress={() =>
            //     this.props.navigation.navigate('AccountDetails', { account: account })}
            // >
            <View>
                {
                    this.state.subscriptions.length === 1 ?
                        <View style={noListViewstyle}>
                            <Text style={noListTextStyle}>No saved subscriptions</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navProp.navigate('AddSubscription')}>
                                <Text style={noListTextStyle2}>Add now!</Text>
                            </TouchableOpacity>

                        </View>
                        :
                        <View>
                            <FlatList
                                data={this.state.subscriptions}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={listViewstyle}>
                                            {this.getIcon(item.value.productType)}
                                            <Text style={leftTextStyle}>{item.value.name}</Text>
                                            <Text style={rightTextStyle}>€ {item.value.price}</Text>
                                            {this.calculateDaysLeft(item.value.chosenDate)}
                                        </View>
                                    )
                                }}
                            />
                            {/* <Icon name='md-car' size={32} color={'#04A7F1'} style={{ marginTop: -5 }} />
                                <Text style={leftTextStyle}>Audi R8</Text>
                                <Text style={rightTextStyle}>€ 300,29</Text>
                                <Text style={rightTextStyle}>2 days</Text> */}

                            {/* <View style={listViewstyle}>
                                <Icon name='md-laptop' size={32} color={'#04A7F1'} style={{ marginTop: -5 }} />
                                <Text style={leftTextStyle}>Acer Aspire</Text>
                                <Text style={rightTextStyle}>€ 23,29</Text>
                                <Text style={rightTextStyle}>1 week</Text>
                            </View>
                            <View style={listViewstyle}>
                                <Icon name='md-car' size={32} color={'#04A7F1'} style={{ marginTop: -5 }} />
                                <Text style={leftTextStyle}>Audi R8</Text>
                                <Text style={rightTextStyle}>€ 133,75</Text>
                                <Text style={rightTextStyle}>2 days</Text>
                            </View>
                            <View style={listViewstyleNoBorder}>
                                <Icon name='md-phone-portrait' size={32} color={'#04A7F1'} style={{ marginTop: -5 }} />
                                <Text style={leftTextStyle}>Iphone X</Text>
                                <Text style={rightTextStyle}>€ 92,29</Text>
                                <Text style={rightTextStyle}>3 weeks</Text>
                            </View> */}
                        </View>
                }
            </View>

        )
    }
}

const styles = StyleSheet.create({
    listViewstyle: {
        flexDirection: 'row',
        marginTop: 15,
        paddingBottom: 7.5,
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderBottomColor: "#D8D8D8"
    },
    listViewstyleNoBorder: {
        flexDirection: 'row',
        marginTop: 15,
        paddingBottom: 7.5,
        justifyContent: "space-around",
    },
    leftTextStyle: {
        fontSize: 17,
        color: "#343434",
        textAlign: 'left',
        fontWeight: "bold"

    },
    rightTextStyle: {
        fontSize: 17,
        color: "#343434",
        textAlign: 'right',
        fontWeight: "bold"

    },

    noListViewstyle: {
        flexDirection: 'column',
        marginTop: 15,
        padding: 30,

        justifyContent: "center",
        alignItems: "center",
    },
    noListTextStyle: {
        fontSize: 19,
        marginBottom: 20,
        color: "#575757",
        fontWeight: "bold"
    },
    noListTextStyle2: {
        fontSize: 22,
        color: "#04A7F1",
        fontWeight: "bold",
        paddingBottom: 20
    },

    iconStyle: {
        width: 50,
        height: 50,

        paddingBottom: 20,
        zIndex: +2
    }
});


export default SubscriptionList;