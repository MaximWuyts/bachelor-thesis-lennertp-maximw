import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

class SubscriptionList extends React.Component {
    render() {
        const { account } = this.props;
        const { listViewstyle, leftTextStyle, rightTextStyle, listViewstyleNoBorder, noListViewstyle, noListTextStyle, noListTextStyle2, iconStyle } = styles
        return (
            // <TouchableOpacity onPress={() =>
            //     this.props.navigation.navigate('AccountDetails', { account: account })}
            // >
            <View>

                <View style={noListViewstyle}>
                    <Text style={noListTextStyle}>No saved subscriptions</Text>
                    <TouchableOpacity>
                        <Text style={noListTextStyle2}>Add now!</Text>
                    </TouchableOpacity>

                </View>

                {/*             
                <View style={listViewstyle}>
                    <Icon name='md-car' size={32} color={'#04A7F1'} style={{ marginTop: -5 }} />
                    <Text style={leftTextStyle}>Audi R8</Text>
                    <Text style={rightTextStyle}>€ 300,29</Text>
                    <Text style={rightTextStyle}>2 days</Text>
                </View>
                <View style={listViewstyle}>
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