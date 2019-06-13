import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const ProfileDetail = ({ email, }) => {

    const { listViewstyle, NoBorderlistViewstyle, textStyle, valueTextStyle, linktextStyle, lastChildStyle } = styles;
    return (

        <View>
            <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                <View style={listViewstyle}>
                    <Text style={textStyle}>First Name</Text>
                    <Text style={valueTextStyle}>Naam</Text>
                </View>
                <View style={listViewstyle}>
                    <Text style={textStyle}>Last Name</Text>
                    <Text style={valueTextStyle}>Naam</Text>
                </View>
                <View style={listViewstyle}>
                    <Text style={textStyle}>E-mail</Text>
                    <Text style={valueTextStyle}>{email}</Text>
                </View>
                <View style={NoBorderlistViewstyle}>
                    <Text style={textStyle}>Password</Text>
                    <Text style={valueTextStyle}>*********</Text>
                </View>
                <View style={lastChildStyle}>
                    <Text style={linktextStyle}>Change Password</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    listViewstyle: {
        fontSize: 20,
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: "center",
        flexDirection: 'row',
        marginTop: 20,
        paddingBottom: 10,
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#D8D8D8"
    },
    NoBorderlistViewstyle: {
        fontSize: 20,
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: "center",
        flexDirection: 'row',
        marginTop: 15,
        paddingBottom: 7.5,
        justifyContent: "space-between",
    },
    lastChildStyle: {
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 15,
        paddingBottom: 7.5,
    },
    textStyle: {
        fontSize: 17,
        color: "#575757"
    },
    valueTextStyle: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#575757"
    },
    BoldtextStyle: {
        fontWeight: "700",
        fontSize: 17,
        color: "#575757"
    },
    linktextStyle: {
        fontSize: 17,
        color: "#04A7F1"
    }
});

export default ProfileDetail;