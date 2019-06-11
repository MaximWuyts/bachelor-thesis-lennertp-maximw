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
        const { headerStyle, textHeaderStyle, iconStyle } = styles;
        return (
            <View style={headerStyle}>

                <TouchableOpacity>
                    <Image
                        resizeMode="contain"
                        source={require('../../assets/menu.png')} style={iconStyle} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ marginLeft: 115 }}>
                        <Text style={textHeaderStyle}>{this.props.headerText}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {

    headerStyle: {
        paddingTop: 30,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 38.5,
        flexDirection: 'row',
        backgroundColor: "transparent",
        elevation: 10,
    },
    textHeaderStyle: {
        paddingTop: 10,
        fontSize: 23,
        color: "#fff",
        fontWeight: "700",

    },
    iconStyle: {
        paddingBottom: 0,
        marginTop: 10,
        width: 40,
        height: 27.5
    }
};

export default withNavigation(AppHeader);
