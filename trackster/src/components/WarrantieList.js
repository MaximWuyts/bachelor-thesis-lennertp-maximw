import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

class WarrantieList extends React.Component {
    render() {
        const { account } = this.props;
        const WarrantieListArray = 0;
        const { listViewstyle, leftTextStyle, rightTextStyle, listViewstyleNoBorder, iconStyle, noListViewstyle, noListTextStyle, noListTextStyle2 } = styles
        return (
            // <TouchableOpacity onPress={() =>
            //     this.props.navigation.navigate('AccountDetails', { account: account })}
            // >
            <View>
                {
                    WarrantieListArray === 0 ?
                        <View style={noListViewstyle}>
                            <Text style={noListTextStyle}>No saved warranties</Text>
                            <TouchableOpacity>
                                <Text style={noListTextStyle2}>Add now!</Text>
                            </TouchableOpacity>

                        </View>
                        :
                        <View>
                            <View style={listViewstyle}>
                                <Icon name='md-car' size={32} color={'#04A7F1'} style={{ marginTop: -5 }} />
                                <Text style={leftTextStyle}>Audi R8</Text>
                                <Text style={rightTextStyle}>2 days</Text>
                            </View>
                            <View style={listViewstyle}>
                                <Icon name='md-laptop' size={32} color={'#04A7F1'} style={{ marginTop: -5 }} />
                                <Text style={leftTextStyle}>Acer Aspire</Text>
                                <Text style={rightTextStyle}>1 week</Text>
                            </View>
                            <View style={listViewstyle}>
                                <Icon name='md-phone-portrait' size={32} color={'#04A7F1'} style={{ marginTop: -5 }} />
                                <Text style={leftTextStyle}>Iphone X</Text>
                                <Text style={rightTextStyle}>3 weeks</Text>
                            </View>
                            <View style={listViewstyleNoBorder}>
                                <Icon name='md-phone-portrait' size={32} color={'#04A7F1'} style={{ marginTop: -5 }} />
                                <Text style={leftTextStyle}>Iphone X</Text>
                                <Text style={rightTextStyle}>3 weeks</Text>
                            </View>
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