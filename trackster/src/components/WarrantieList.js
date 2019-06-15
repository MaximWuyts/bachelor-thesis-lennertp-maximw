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
        const { listViewstyle, leftTextStyle, daysContStyle, rightTextStyle, listViewstyleNoBorder, iconStyle, iconContStyle, noListViewstyle, noListTextStyle, noListTextStyle2 } = styles
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
                                        <TouchableOpacity onPress={() =>
                                            this.props.navProp.navigate('Detail', { item: item, formType: "warranty" })}
                                        >
                                            <View style={(index === this.state.warranties.length - 1) ? listViewstyleNoBorder : listViewstyle} key={index}>
                                              <View style={iconContStyle}>
                                                {this.getIcon(item.value.productType)}
                                              </View>
                                                <Text style={leftTextStyle}>{item.value.name}</Text>
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

            // </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    listViewstyle: {
        flexDirection: 'row',
        marginTop: 15,
        paddingBottom: 7.5,
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#D8D8D8",
        paddingLeft: 15,
        paddingRight: 15,
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
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 15,
        paddingBottom: 7.5,
        justifyContent: "space-between",
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
        textAlign: 'right',
        fontWeight: "bold",
        flex: 2
    },
    daysContStyle: {
        flex: 2,
        fontSize: 17,
        color: "#343434",
        fontWeight: "bold",
        textAlign: 'right',
    },
    iconStyle: {
        marginTop: -5,
        paddingBottom: 5,
        zIndex: +2
    },
    iconContStyle: {
        flex: 1,
        justifyContent: 'center'
    }
});


export default WarrantieList;
