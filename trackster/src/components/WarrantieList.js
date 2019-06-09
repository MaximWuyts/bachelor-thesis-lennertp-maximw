import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { db, fire } from '../keys/firebaseKeys';
import Icon from 'react-native-vector-icons/Ionicons'
import moment from "moment";

class WarrantieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            warranties: []
        }
    }

    componentDidMount = () => {
        let warranties = [];
        db.ref(`warranties/${this.props.screenProps.user.uid}`)
            .orderByChild('date')
            .on('value', (snap) => {
                if (snap.val()) {
                    let values = snap.val();
                    console.log('dwee2', values);
                    Object.keys(values).forEach(key => {
                        warranties.push({
                            id: key,
                            value: values[key]
                        })
                    });
                    this.setState({
                        warranties
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
        else
            <Text style={styles.rightTextStyle}>3 years left</Text>

    }

    render() {
        const { listViewstyle, leftTextStyle, rightTextStyle, listViewstyleNoBorder, iconStyle, noListViewstyle, noListTextStyle, noListTextStyle2 } = styles
        return (
            // <TouchableOpacity onPress={() =>
            //     this.props.navigation.navigate('AccountDetails', { account: account })}
            // >
            <View>
                {
                    this.state.warranties.length === 0 ?
                        <View style={noListViewstyle}>
                            <Text style={noListTextStyle}>No saved warranties</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navProp.navigate('AddWarrantie')}>
                                <Text style={noListTextStyle2}>Add now!</Text>
                            </TouchableOpacity>

                        </View>
                        :
                        <View>
                            <FlatList

                                data={this.state.warranties}
                                renderItem={({ item, index }) => {

                                    return (
                                        <View style={(index === this.state.warranties.length - 1) ? listViewstyleNoBorder : listViewstyle} key={index}>
                                            {this.getIcon(item.value.productType)}
                                            <Text style={leftTextStyle}>{item.value.name}</Text>
                                            {this.calculateDaysLeft(item.value.chosenDate)}
                                        </View>
                                    )
                                }}
                            />
                            {/* <View style={listViewstyle}>
                                <Icon name='md-phone-portrait' size={32} color={'#04A7F1'} style={{ marginTop: -5 }} />
                                <Text style={leftTextStyle}>Iphone X</Text>
                                <Text style={rightTextStyle}>3 weeks</Text>
                            </View>
                            <View style={listViewstyleNoBorder}>
                                <Icon name='md-phone-portrait' size={32} color={'#04A7F1'} style={{ marginTop: -5 }} />
                                <Text style={leftTextStyle}>Iphone X</Text>
                                <Text style={rightTextStyle}>3 weeks</Text>
                            </View> */}
                        </View>
                }
            </View>

            // </TouchableOpacity>
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
    iconStyle: {
        paddingBottom: 0,
        marginTop: 10,
        width: 45,
        height: 45,


    }
});


export default WarrantieList;