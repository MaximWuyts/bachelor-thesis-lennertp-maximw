import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { db, fire } from '../keys/firebaseKeys';
import Icon from 'react-native-vector-icons/Ionicons'
import moment from "moment";

class SubscriptionPaidList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subscriptionsPaid: []
        }
    }

    componentDidMount = () => {
        let subscriptionsPaid = [];
        db.ref(`subscriptions/${this.props.screenProps.user.uid}`)
            .orderByChild('chosenDate')
            .on('value', (snap) => {

                if (snap.val()) {
                    let values = snap.val();

                    Object.keys(values).forEach(key => {
                        subscriptionsPaid.push({
                            id: key,
                            value: values[key]
                        })
                    });
                    this.setState({
                        subscriptionsPaid
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



    render() {
        const { listViewstyle, leftTextStyle, iconContStyle, dateStyle, rightTextStyle, listViewstyleNoBorder, noListViewstyle, noListTextStyle, noListTextStyle2, iconStyle } = styles
        return (
            // <TouchableOpacity onPress={() =>
            //     this.props.navigation.navigate('AccountDetails', { account: account })}
            // >
            <View>
                {
                    this.state.subscriptionsPaid.length === 1 ?
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
                                data={this.state.subscriptionsPaid}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={(index === this.state.subscriptionsPaid.length - 1) ? listViewstyleNoBorder : listViewstyle} key={index}>
                                          <View style={iconContStyle}>
                                            {this.getIcon(item.value.productType)}
                                          </View>
                                            <Text style={leftTextStyle}>{item.value.name}</Text>
                                            <Text style={rightTextStyle}>€ {item.value.price}</Text>
                                            <Text style={dateStyle}>{item.value.chosenDate}</Text>
                                        </View>)
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
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 7.5,
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderBottomColor: "#D8D8D8"
    },
    listViewstyleNoBorder: {
        flexDirection: 'row',
        marginTop: 15,
        paddingBottom: 7.5,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: "space-around",
    },
    leftTextStyle: {
        fontSize: 17,
        color: "#343434",
        textAlign: 'left',
        fontWeight: "bold",
        flex: 3
    },
    rightTextStyle: {
        fontSize: 17,
        color: "#343434",
        textAlign: 'left',
        fontWeight: "bold",
        flex: 1
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
    dateStyle: {
        fontSize: 17,
        color: "#343434",
        fontWeight: "bold",
        textAlign: 'right',
        flex: 2
    },
    iconContStyle: {
        flex: 1,
        justifyContent: 'center'
    },
    iconStyle: {
        width: 44.6,
        marginTop: -5,
        paddingBottom: 5,
        zIndex: +2
    }
});


export default SubscriptionPaidList;
