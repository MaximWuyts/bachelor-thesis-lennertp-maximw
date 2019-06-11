import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { db, fire } from '../keys/firebaseKeys';
import Icon from 'react-native-vector-icons/Ionicons'
import moment from "moment";

class WarrantieListPaid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            warrantiesPaid: []
        }
    }

    componentDidMount = () => {
        let warrantiesPaid = [];
        db.ref(`warranties/${this.props.screenProps.user.uid}`).on('value', (snap) => {
            if (snap.val()) {
                let values = snap.val();
                Object.keys(values).forEach(key => {
                    console.log('valll', values);
                    warrantiesPaid.push({
                        id: key,
                        value: values[key]
                    })
                });
                this.setState({
                    warrantiesPaid
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

    render() {
        const { listViewstyle, leftTextStyle, rightTextStyle, listViewstyleNoBorder, iconStyle, noListViewstyle, noListTextStyle, noListTextStyle2 } = styles
        return (
            // <TouchableOpacity onPress={() =>
            //     this.props.navigation.navigate('AccountDetails', { account: account })}
            // >
            <View>

                <View>
                    <FlatList

                        data={this.state.warrantiesPaid}
                        renderItem={({ item, index }) => {

                            return (
                                <View style={(index === this.state.warrantiesPaid.length - 1) ? listViewstyleNoBorder : listViewstyle} key={index}>
                                    {this.getIcon(item.value.productType)}
                                    <Text style={leftTextStyle}>{item.value.name}</Text>
                                    <Text style={leftTextStyle}>{item.value.chosenDate}</Text>
                                </View>
                            )
                        }}
                    />
                </View>

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


export default WarrantieListPaid;