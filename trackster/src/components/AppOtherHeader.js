import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class AppOtherHeader extends React.Component {
    constructor(props) {
        super(props);

    }

    render = () => {
        console.log('ppp', this.props.navProp)
        const { headerStyle, textHeaderStyle, iconStyle, textHeaderStyle2 } = styles;
        return (
            <View style={headerStyle}>
                <TouchableOpacity
                    onPress={() => this.props.navProp.goBack(null)}>
                    <Icon name='ios-arrow-back' size={32} color={'#FFFFFF'}
                        style={iconStyle}
                    />
                </TouchableOpacity>

                <View>
                    <Text style={textHeaderStyle}>{this.props.headerText}</Text>
                </View>
                <View>
                    <Text style={textHeaderStyle2}> </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        flex: 1,
        marginTop: 30,
        maxHeight: 50,
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textHeaderStyle: {
        flex: 1,
        fontSize: 23,
        color: "#fff",
        fontWeight: "700",
        marginBottom: 10,
        textAlign: "right"
    },
    textHeaderStyle2: {
        flex: 3,
        fontSize: 23,
        color: "#fff",
        fontWeight: "700",
        marginBottom: 10,
        textAlign: "right"
    },
    iconStyle: {
        flex: 3,
        paddingLeft: 15,
    }
});

export default AppOtherHeader;