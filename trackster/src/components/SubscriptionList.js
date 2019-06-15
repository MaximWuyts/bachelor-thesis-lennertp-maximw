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
                    this.setState({
                        subscriptions
                    })
                }
            });
    }

    getIcon = (productType) => {
        const { iconStyle } = styles;
        if (productType === 'online') {
            return <Icon name='md-laptop' size={32} color={'#04A7F1'} style={iconStyle} />
        }
        if (productType === 'financial') {
            return <Icon name='md-card' size={32} color={'#04A7F1'} style={iconStyle} />
        }
        if (productType === 'transport') {
            return <Icon name='md-car' size={32} color={'#04A7F1'} style={iconStyle, {marginLeft: 3.5}} />
        }
        return <Icon name='md-phone-portrait' size={32} color={'#04A7F1'} style={iconStyle, {marginLeft: 6.5}} />
    }

    calculateDaysLeft = (endDate) => {
        let startDate = moment()
        if (!moment.isMoment(startDate)) startDate = moment(startDate);
        if (!moment.isMoment(endDate)) endDate = moment(endDate);
        let days = endDate.diff(startDate, "days");
        if (days <= 30) {
            return <Text style={styles.dayStyle}>{days} days</Text>
        }
        if (days > 30 && days < 40) {
            return <Text style={styles.dayStyle}>1 month</Text>
        }
        if (days > 60) {
            return <Text style={styles.dayStyle}>2 months</Text>
        }
        if (days > 365) {
            return <Text style={styles.dayStyle}>1 year</Text>
        }

    }


    render() {
        const { listViewstyle, daysContStyle, leftTextStyle, rightTextStyle, listViewstyleNoBorder, noListViewstyle, noListTextStyle, noListTextStyle2, iconStyle, iconContStyle } = styles
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
                                    console.log('testing', item.value.chosenDate);
                                    return (
                                        <TouchableOpacity onPress={() =>
                                            this.props.navProp.navigate('Detail', { item: item, formType: "subscription" })}
                                        >
                                            <View style={(index === this.state.subscriptions.length - 1) ? listViewstyleNoBorder : listViewstyle} key={index}>
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
        flex: 3

    },
    rightTextStyle: {
        fontSize: 17,
        color: "#343434",
        fontWeight: "bold",
        textAlign: 'left',
        flex: 2
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
        flex: 2,
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
        flex: 1,
        justifyContent: 'center'
    },
    iconStyle: {
        marginTop: -5,
        paddingBottom: 5,
        zIndex: +2
    }
});


export default SubscriptionList;
