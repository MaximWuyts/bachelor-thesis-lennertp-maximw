import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import { Left, Body } from 'native-base';

class AppHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const { headerStyle, textHeaderStyle, iconStyle, textHeaderStyle2 } = styles;
        return (
            <View style={headerStyle}>

                <TouchableOpacity
                    onPress={() => this.props.navProp.openDrawer()}

                >
                    <Image
                        resizeMode="contain"
                        source={require('../../assets/menu.png')} style={iconStyle} />
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

const styles = {

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
        fontSize: 26,
        color: "#fff",
        fontWeight: "700",
        marginBottom: 10,
        marginLeft: -50,
        marginTop: 10
    },
    textHeaderStyle2: {
        flex: 3,
        fontSize: 23,
        color: "#fff",
        fontWeight: "700",
        marginBottom: 10,

    },
    iconStyle: {
        flex: 3,
        marginLeft: 15,
        width: 40,
        height: 27.5
    }
};

export default withNavigation(AppHeader);
