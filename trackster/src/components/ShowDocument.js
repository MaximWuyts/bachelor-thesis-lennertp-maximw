import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from "moment";

const ShowDocument = ({ price, productType, urlLink, type, formType, calculateDaysLeft, chosenDate, warrantyDuration }) => {

    const { listViewstyle, NoBorderlistViewstyle, lastChildStyle, textStyle, BoldtextStyle, linktextStyle } = styles;
    return (

        <View>
            {formType === "subscription" ?
                <View>
                    <View style={listViewstyle}>
                        <Text style={textStyle}>Subscription Type</Text>
                        <Text style={textStyle}>{type}</Text>
                    </View>
                    <View style={listViewstyle}>
                        <Text style={textStyle}>{calculateDaysLeft(chosenDate)}</Text>
                        <Text style={textStyle}>{moment(chosenDate).format('DD/MM/YYYY')}</Text>
                    </View>
                    <View style={NoBorderlistViewstyle}>
                        <Text style={BoldtextStyle}>{type}</Text>
                        <Text style={BoldtextStyle}>Total</Text>
                    </View>
                    <View style={listViewstyle}>
                        <Text style={textStyle}>€{price}</Text>
                        <Text style={textStyle}>€{price}</Text>
                    </View>
                    <View style={lastChildStyle}>
                        <Text style={linktextStyle}>{urlLink}</Text>
                    </View>
                </View>
                :
                <View>
                    <View style={listViewstyle}>
                        <Text style={textStyle}>Warranty Duration</Text>
                        <Text style={textStyle}>{warrantyDuration}</Text>
                    </View>
                    <View style={listViewstyle}>
                        <Text style={textStyle}>{calculateDaysLeft(chosenDate)}</Text>
                        <Text style={textStyle}>{moment(chosenDate).format('DD/MM/YYYY')}</Text>
                    </View>
                    <View style={NoBorderlistViewstyle}>
                        <Text style={BoldtextStyle}>Cost</Text>
                        <Text style={BoldtextStyle}>Total</Text>
                    </View>
                    <View style={listViewstyle}>
                        <Text style={textStyle}>€{price}</Text>
                        <Text style={textStyle}>€{price}</Text>
                    </View>
                    <View style={lastChildStyle}>
                        <Text style={linktextStyle}>{urlLink}</Text>
                    </View>
                </View>}
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

export default ShowDocument;