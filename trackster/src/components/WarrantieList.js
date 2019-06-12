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
        const { rightTextStyle } = styles;
        endDate = !moment.isMoment(endDate) && moment(endDate)
        let startDate = moment().startOf('day');
        let diff = moment.duration(endDate.diff(startDate)).asDays();
        if (diff <= 30) {
            return <Text style={rightTextStyle}>{diff} days left</Text>
        }
        if (diff >= 30 && diff < 40) {
            return <Text style={rightTextStyle}>1 month left</Text>
        }
        if (diff >= 40 && diff < 75) {
            return <Text style={rightTextStyle}>3 months left</Text>
        }
        if (diff >= 75 && diff < 200) {
            return <Text style={rightTextStyle}>5 months left</Text>
        }
        if (diff >= 200 && diff < 365) {
            return <Text style={rightTextStyle}>8 months left</Text>
        }
        if (diff >= 365 && diff < 500) {
            return <Text style={rightTextStyle}>1 year left</Text>
        }
        if (diff >= 500 & diff < 730) {
            return <Text style={rightTextStyle}>2 years left</Text>
        }
        if (diff >= 730) {
            return <Text style={rightTextStyle}>3 years left</Text>
        }

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
                                        <TouchableOpacity onPress={() =>
                                            this.props.navProp.navigate('Detail', { item: item, formType: "warranty" })}
                                        >
                                            <View style={(index === this.state.warranties.length - 1) ? listViewstyleNoBorder : listViewstyle} key={index}>
                                                {this.getIcon(item.value.productType)}
                                                <Text style={leftTextStyle}>{item.value.name}</Text>
                                                {this.calculateDaysLeft(item.value.chosenDate)}
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
