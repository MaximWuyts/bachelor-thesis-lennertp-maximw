import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { db, fire } from '../keys/firebaseKeys';
import Icon from 'react-native-vector-icons/Ionicons'
import moment from "moment";

import { connect } from 'react-redux'
import { setSubscriptions } from '../actions';


class SubscriptionList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        let subscriptions = [];
        db.ref(`subscriptions/${this.props.screenProps.user.uid}`)
            .orderByChild('chosenDate')
            .on('value', (snap) => {

                if (snap.val()) {
                    let values = snap.val();

                    Object.keys(values).forEach(key => {
                        subscriptions.push({
                            id: key,
                            value: values[key]
                        })
                    });
                    subscriptions.sort(function (a, b) {
                        var dateA = new Date(a.value.chosenDate), dateB = new Date(b.value.chosenDate);
                        return dateA - dateB;
                    });
                    this.props.setSubscriptions(subscriptions);
                }
            });
    }

    getIcon = (productType) => {
        const { iconStyle, carStyle, phoneStyle } = styles;
        if (productType === 'online') {
            return <Icon name='md-laptop' size={32} color={'#04A7F1'} style={iconStyle} />
        }
        if (productType === 'financial') {
            return <Icon name='md-card' size={32} color={'#04A7F1'} style={iconStyle} />
        }
        if (productType === 'transport') {
            return <Icon name='md-car' size={32} color={'#04A7F1'} style={[iconStyle, carStyle]} />
        }
        return <Icon name='md-phone-portrait' size={32} color={'#04A7F1'} style={[iconStyle, phoneStyle]} />
    }


    calculateDaysLeft = (endDate) => {
        const { dayStyle } = styles;
        endDate = !moment.isMoment(endDate) && moment(endDate)
        let startDate = moment().startOf('day');
        let diff = moment.duration(endDate.diff(startDate)).asDays();
        if (diff <= 30) {
            return <Text style={dayStyle}>{diff} days</Text>
        }
        if (diff >= 30 && diff < 40) {
            return <Text style={dayStyle}>1 month</Text>
        }
        if (diff >= 40 && diff < 75) {
            return <Text style={dayStyle}>3 months</Text>
        }
        if (diff >= 75 && diff < 200) {
            return <Text style={dayStyle}>5 months</Text>
        }
        if (diff >= 200 && diff < 365) {
            return <Text style={dayStyle}>8 months</Text>
        }
        if (diff >= 365 && diff < 500) {
            return <Text style={dayStyle}>1 year</Text>
        }
        if (diff >= 500 & diff < 730) {
            return <Text style={dayStyle}>2 years</Text>
        }
        if (diff >= 730) {
            return <Text style={dayStyle}>3 years</Text>
        }
        else {
            return <Text style={dayStyle}>date error</Text>
        }
    }


    render() {
        const { listViewstyle, daysContStyle, leftTextStyle, rightTextStyle, listViewstyleNoBorder, noListViewstyle, noListTextStyle, noListTextStyle2, iconStyle, iconContStyle } = styles;
        return (
            // <TouchableOpacity onPress={() =>
            //     this.props.navigation.navigate('AccountDetails', { account: account })}
            // >
            <View>
                {
                    this.props.subscriptions.length === 0 ?
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

                                data={this.props.subscriptions}
                                renderItem={({ item, index }) => {
                                    function compare(dateTimeA, dateTimeB) {
                                        var momentA = moment(dateTimeA, "MM/DD/YYYY");
                                        var momentB = moment(dateTimeB, "MM/DD/YYYY");
                                        if (momentA > momentB) return 1;
                                        else if (momentA < momentB) return -1;
                                        else return 0;
                                    }
                                    if (compare(item.value.chosenDate, moment().format('MM/DD/YYYY')) >= 1) {
                                        return (
                                            <TouchableOpacity onPress={() =>
                                                this.props.navProp.navigate('Detail', { item: item, formType: "subscription" })}
                                            >
                                                <View style={(index === this.props.subscriptions.length - 1) ? listViewstyleNoBorder : listViewstyle} key={index}>
                                                    <View style={iconContStyle}>
                                                      {this.getIcon(item.value.productType)}
                                                    </View>
                                                    <Text style={leftTextStyle}>{item.value.name}</Text>
                                                    <Text style={rightTextStyle}>€ {item.value.price}</Text>
                                                    <View style={daysContStyle}>
                                                      {this.calculateDaysLeft(item.value.chosenDate)}
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }

                                }}
                            />
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
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D8D8"
    },
    listViewstyleNoBorder: {
        flexDirection: 'row',
        marginTop: 15,
        paddingBottom: 7.5,
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingRight: 15,
    },
    leftTextStyle: {
        fontSize: 17,
        color: "#343434",
        fontWeight: "bold",
        flex: 40

    },
    rightTextStyle: {
        fontSize: 17,
        color: "#343434",
        fontWeight: "bold",
        textAlign: 'left',
        flex: 20
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
    daysContStyle: {
        flex: 25,
        fontSize: 17,
        color: "#343434",
        fontWeight: "bold",
        textAlign: 'right',
    },
    dayStyle: {
        fontSize: 17,
        color: "#343434",
        fontWeight: "bold",
        textAlign: 'right',
    },
    iconContStyle: {
        flex: 15,
        justifyContent: 'center',
        width: 100
    },
    iconStyle: {
        marginTop: -5,
        paddingBottom: 5,
        zIndex: +2
    },
    carStyle: {
      marginLeft: 3.5
    },
    phoneStyle: {
      marginLeft: 6.5
    }
});


function mapStateToProps(state) {

    return {
        subscriptions: state.documentReducer.subscriptions,

    }
};

export default connect(mapStateToProps, { setSubscriptions })(SubscriptionList);
