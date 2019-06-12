import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class NavHeader extends React.Component {
    render = () => {
        const { textHeaderStyle, textHeaderStyle2, textHeaderStyle3, headerStyle } = styles
        return (
            <View style={headerStyle}>

                <TouchableOpacity>
                    <Text style={textHeaderStyle}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={textHeaderStyle2}>Sub</Text>
                </TouchableOpacity>

                <TouchableOpacity>
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
        backgroundColor: "rgba(255,255,255,0.3)",
        marginLeft: 20,
        paddingLeft: 40,
        paddingRight: 40,
        fontSize: 23,
        color: "#fff",
    },
    textHeaderStyle2: {
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.3)",
        borderRadius: 15,
        backgroundColor: "rgba(255,255,255,0.3)",
        paddingLeft: 40,
        paddingRight: 40,
        fontSize: 23,
        color: "#fff",

    },
    textHeaderStyle3: {
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.3)",
        borderRadius: 15,
        backgroundColor: "rgba(255,255,255,0.3)",
        marginRight: 20,
        paddingLeft: 40,
        paddingRight: 40,
        fontSize: 23,
        color: "#fff",
    }
});

export default NavHeader;