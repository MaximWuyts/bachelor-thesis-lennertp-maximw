import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';

class NavHeader extends React.Component {
    constructor(props) {
        super(props);

    }
    render = () => {
        const { textHeaderStyle, textHeaderStyle2, textHeaderStyle3, headerStyle } = styles
        const { pressAll, pressSubscriptions, pressWarranties } = this.props
        return (
            <View style={headerStyle}>

                <TouchableOpacity
                    onPress={pressAll}
                >
                    <Text style={textHeaderStyle}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={pressSubscriptions}>
                    <Text style={textHeaderStyle2}>Sub</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={pressWarranties}>
                    <Text style={textHeaderStyle3}>War</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        marginTop: 30,
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textHeaderStyle: {
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.3)",
        borderRadius: 15,
        marginLeft: Platform.OS === 'ios' ? 15 : 25,
        paddingLeft: 35,
        paddingRight: 35,
        fontSize: 23,
        color: "#fff",
    },
    textHeaderStyle2: {
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.3)",
        borderRadius: 15,
        paddingLeft: 35,
        paddingRight: 35,
        fontSize: 23,
        color: "#fff",

    },
    textHeaderStyle3: {
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.3)",
        borderRadius: 15,
        marginRight: Platform.OS === 'ios' ? 15 : 25,

        paddingLeft: 35,
        paddingRight: 35,
        fontSize: 23,
        color: "#fff",
    }
});

export default NavHeader;