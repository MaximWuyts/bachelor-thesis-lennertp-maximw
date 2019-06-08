import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class AppOtherHeader extends React.Component {
    constructor(props) {
        super(props);

    }

    render = () => {

        const { headerStyle, textHeaderStyle, iconStyle } = styles;
        return (
            <View style={headerStyle}>

                <TouchableOpacity
                    onPress={() => this.props.navProp.goBack()}>
                    <Icon name='ios-arrow-back' size={32} color={'#FFFFFF'}
                        style={{ marginTop: 10 }}
                    />
                </TouchableOpacity>


                <View style={{ marginLeft: 115 }}>
                    <Text style={textHeaderStyle}>{this.props.headerText}</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        marginTop: 30,
        paddingBottom: 40,
        paddingLeft: 20,
        paddingRight: 38.5,
        flexDirection: 'row',

    },
    textHeaderStyle: {
        fontSize: 20,
        color: "#fff",
        marginTop: 12.5,
        fontWeight: "700",

    },
    iconStyle: {
        color: "#fff",
        paddingBottom: 0,
        marginTop: 10,
        paddingLeft: 12.5,
        paddingRight: 12.5
    }
});

export default AppOtherHeader;