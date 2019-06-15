import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { db, fire } from '../keys/firebaseKeys';
import Icon from 'react-native-vector-icons/Ionicons'
import moment from "moment";

import { connect } from 'react-redux'
import { setWarranties } from '../actions';


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
            .orderByChild('chosenDate')
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
                    warranties.sort((a, b) => moment(a.value.chosenDate) - moment(b.value.chosenDate));
                    console.log('war', warranties);
                    this.props.setWarranties(warranties);
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
        const { rightTextStyle } = styles;
        endDate = !moment.isMoment(endDate) && moment(endDate)
        let startDate = moment().startOf('day');
        let diff = moment.duration(endDate.diff(startDate)).asDays();
        if (diff <= 30) {
            return <Text style={rightTextStyle}>{diff} days</Text>
        }
        if (diff >= 30 && diff < 40) {
            return <Text style={rightTextStyle}>1 month</Text>
        }
        if (diff >= 40 && diff < 75) {
            return <Text style={rightTextStyle}>3 months</Text>
        }
        if (diff >= 75 && diff < 200) {
            return <Text style={rightTextStyle}>5 months</Text>
        }
        if (diff >= 200 && diff < 365) {
            return <Text style={rightTextStyle}>8 months</Text>
        }
        if (diff >= 365 && diff < 500) {
            return <Text style={rightTextStyle}>1 year</Text>
        }
        if (diff >= 500 & diff < 730) {
            return <Text style={rightTextStyle}>2 years</Text>
        }
        if (diff >= 730) {
            return <Text style={rightTextStyle}>3 years</Text>
        }

    }

    render() {
        const { listViewstyle, leftTextStyle, daysContStyle, rightTextStyle, listViewstyleNoBorder, iconStyle, iconContStyle, noListViewstyle, noListTextStyle, noListTextStyle2 } = styles
        return (
            // <TouchableOpacity onPress={() =>
            //     this.props.navigation.navigate('AccountDetails', { account: account })}
            // >
            <View>
                {
                    this.props.warranties.length === 0 ?
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

                                data={this.props.warranties}
                                renderItem={({ item, index }) => {
                                    function compare(dateTimeA, dateTimeB) {
                                        var momentA = moment(dateTimeA, "MM/DD/YYYY");
                                        var momentB = moment(dateTimeB, "MM/DD/YYYY");
                                        if (momentA > momentB) return 1;
                                        else if (momentA < momentB) return -1;
                                        else return 0;
                                    }
                                    if (compare(item.value.chosenDate, moment().format('MM/DD/YYYY')) === 1) {
                                        return (
                                            <TouchableOpacity onPress={() =>
                                                this.props.navProp.navigate('Detail', { item: item, formType: "warranty" })}
                                            >
                                                <View style={(index === this.props.warranties.length - 1) ? listViewstyleNoBorder : listViewstyle} key={index}>
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
                                    }
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
        warranties: state.documentReducer.warranties

    }
};

export default connect(mapStateToProps, { setWarranties })(WarrantieList);
