import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Form, Item, Input, Picker, DatePicker } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'


const AddDocument = ({ handleChange, name, price, productType, urlLink, type, setDate, formType }) => {

    console.log('this', productType, "en", type);
    return (
        <View>
            <Form>
                <Item style={{ marginTop: 20, flexDirection: 'row-reverse' }}>
                    <Input placeholder='Enter Name'
                        placeholderTextColor='#d3d3d3'
                        onChangeText={(text) => handleChange('name', text)}
                        value={name}
                        style={{ color: '#d3d3d3', paddingLeft: 20 }}
                    />
                </Item>
                {formType === "subscription" ?
                    <Item picker>
                        <Picker
                            mode="dropdown"
                            style={{ color: '#d3d3d3' }}
                            placeholderStyle={{ color: "#d3d3d3" }}
                            selectedValue={type}
                            onValueChange={(value) => handleChange('type', value)}
                        >
                            <Picker.Item label="Select Your Type" value="" />
                            <Picker.Item label="weekly" value="weekly" />
                            <Picker.Item label="monthly" value="monthly" />
                            <Picker.Item label="yearly" value="yearly" />
                        </Picker>
                    </Item>
                    : null}
                <Item style={{ marginTop: 20, flexDirection: 'row-reverse' }}>
                    <Icon name='euro' style={{ color: '#d3d3d3', fontSize: 20 }} />
                    <Input placeholder='Enter Price'
                        placeholderTextColor='#d3d3d3'
                        keyboardType="numeric"
                        onChangeText={(text) => handleChange('price', text)}
                        value={price}
                        style={{ color: '#d3d3d3', paddingLeft: 20 }}
                    />
                </Item>
                <Item picker>
                    <Picker
                        mode="dropdown"
                        style={{ color: '#d3d3d3' }}
                        placeholderStyle={{ color: "#d3d3d3" }}
                        selectedValue={productType}
                        onValueChange={(value) => handleChange('productType', value)}
                    >
                        <Picker.Item label="Select Your Product Type" value="" />
                        <Picker.Item label="financial" value="financial" />
                        <Picker.Item label="transport" value="transport" />
                        <Picker.Item label="online" value="online" />
                        <Picker.Item label="electronics" value="electronics" />
                    </Picker>
                </Item>
                <Item>
                    <DatePicker
                        defaultDate={new Date(2019, 5, 6)}
                        minimumDate={new Date(2019, 1, 1)}
                        maximumDate={new Date(2021, 12, 31)}
                        locale={"be"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"spinner"}
                        placeHolderText="Select date"
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={setDate}
                        disabled={false}
                        style={{ fontSize: 25, paddingTop: 33 }}
                    />
                </Item>

                <Item style={{ marginTop: 20, flexDirection: 'row-reverse' }}>

                    <Input placeholder='Url Link'
                        placeholderTextColor='#d3d3d3'
                        onChangeText={(text) => handleChange('urlLink', text)}
                        value={urlLink}
                        style={{ color: '#d3d3d3', paddingLeft: 20 }}
                    />
                </Item>
            </Form>


        </View>
    );
}



export default AddDocument;