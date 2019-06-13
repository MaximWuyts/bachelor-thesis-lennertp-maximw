import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Form, Item, Input, Picker, DatePicker } from 'native-base';
import AddButton from './AddButton';


const PersonalDetail = ({ handleChange, birthday, gender, country, urlLink, type, setDate, formType, warrantyDuration }) => {

    const { listViewstyle, textInputStyle, textStyle, valueTextStyle } = styles;
    return (
        <View>
            <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                <View style={listViewstyle}>
                    <Text style={textStyle}>Birthday</Text>

                    <TextInput
                        style={textInputStyle}
                        selectionColor={"#fff"}
                        value={birthday}
                        placeholder={'DD-MM-YYYY'}
                        placeholderTextColor={'#575757'}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => handleChange('birthday', text)}
                    />

                </View>
                <Item picker>
                    <Picker
                        mode="dropdown"
                        style={{ color: '#d3d3d3' }}
                        placeholderStyle={{ color: "#d3d3d3" }}
                        selectedValue={gender}
                        onValueChange={(value) => handleChange('gender', value)}
                    >
                        <Picker.Item label="Select Your Gender" value="" />
                        <Picker.Item label="men" value="men" />
                        <Picker.Item label="women" value="women" />
                        <Picker.Item label="other" value="other" />
                    </Picker>
                </Item>
                <View style={listViewstyle}>
                    <Text style={textStyle}>Country</Text>
                    <TextInput
                        style={textInputStyle}
                        selectionColor={"#fff"}
                        value={country}
                        placeholder={'BE, NL, FR,...'}
                        placeholderTextColor={'#575757'}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => handleChange('country', text)}
                    />
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
        paddingLeft: 5,
        paddingRight: 5,
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
    textInputStyle: {
        width: 117.5,
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

export default PersonalDetail;