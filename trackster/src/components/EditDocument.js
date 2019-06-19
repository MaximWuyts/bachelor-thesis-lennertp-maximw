import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Form, Item, Input, Picker, DatePicker } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'



const EditDocument = ({ handleChange, name, price, productType, urlLink, type, setDate, formType, warrantyDuration, chosenDate }) => {

    console.log('this', productType, "en", type);
    return (
        <View>
            <Form>
                <Item style={{ marginTop: 20, flexDirection: 'row-reverse' }}>
                    <Input placeholder='Enter Name'
                        placeholderTextColor='#000'
                        onChangeText={(text) => handleChange('name', text)}
                        value={name}
                        style={{ color: '#000', paddingLeft: 20 }}
                    />
                </Item>
                {formType === "subscription" ?
                    <Item picker>
                        <Picker
                            mode="dropdown"
                            style={{ color: '#A9A9A9' }}
                            placeholderStyle={{ color: "#A9A9A9" }}
                            selectedValue={type}
                            onValueChange={(value) => handleChange('type', value)}
                        >
                            <Picker.Item label="Select Your Type" value="" />
                            <Picker.Item label="weekly" value="weekly" />
                            <Picker.Item label="monthly" value="monthly" />
                            <Picker.Item label="yearly" value="yearly" />
                        </Picker>
                    </Item>
                    :
                    <Item picker>
                        <Picker
                            mode="dropdown"
                            style={{ color: '#000' }}
                            placeholderStyle={{ color: "#A9A9A9" }}
                            selectedValue={warrantyDuration}
                            onValueChange={(value) => handleChange('warrantyDuration', value)}
                        >
                            <Picker.Item label="Warranty Duration" value="" />
                            <Picker.Item label="6 months" value="6 months" />
                            <Picker.Item label="1 year" value="1 year" />
                            <Picker.Item label="2 years" value="2 years" />
                            <Picker.Item label="3 years" value="3 years" />
                        </Picker>
                    </Item>}
                <Item style={{ marginTop: 20, flexDirection: 'row-reverse' }}>
                    <Icon name='euro' style={{ color: '#A9A9A9', fontSize: 20 }} />
                    <Input placeholder='Enter Price'
                        placeholderTextColor='#A9A9A9'
                        keyboardType="numeric"
                        onChangeText={(text) => handleChange('price', text)}
                        value={price}
                        style={{ color: '#000', paddingLeft: 20 }}
                    />
                </Item>
                <Item picker>
                    <Picker
                        mode="dropdown"
                        style={{ color: '#A9A9A9' }}
                        placeholderStyle={{ color: "#A9A9A9" }}
                        selectedValue={productType}
                        itemTextStyle={{ color: '#A9A9A9' }}
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
                        value={chosenDate}
                        placeHolderText={chosenDate}
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "#000" }}
                        onDateChange={setDate}
                        disabled={false}
                        style={{ fontSize: 25, paddingTop: 33, paddingLeft: -40, color: "#d3d3d3" }}
                    />
                </Item>

                <Item style={{ marginTop: 20, flexDirection: 'row-reverse' }}>

                    <Input placeholder='Url Link'
                        placeholderTextColor='#000'
                        onChangeText={(text) => handleChange('urlLink', text)}
                        value={urlLink}
                        style={{ color: '#000', paddingLeft: 20 }}
                    />
                </Item>
            </Form>


        </View>
    );
}



export default EditDocument;